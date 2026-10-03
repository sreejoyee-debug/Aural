import type { Song } from '../data'
import { supabase } from './supabase'

const API_BASE = import.meta.env.VITE_API_URL ?? '/api'
const AUDIUS_PUBLIC_API = 'https://api.audius.co/v1'

type ApiTrack = {
  id: string; title: string; artist: string; artistId?: string | null; album?: string | null
  artworkUrl?: string | null; durationSeconds?: number; genre?: string | null; mood?: string | null
  permalink?: string | null; streamUrl?: string | null; playCount?: number
}

type ApiResponse<T> = T & { success?: boolean; error?: string }

type AudiusPublicTrack = {
  id: string
  title: string
  duration?: number
  artwork?: { _150x150?: string; _480x480?: string; _1000x1000?: string }
  user?: { id?: string; name?: string }
  genre?: string
  mood?: string
  permalink?: string
  play_count?: number
  playCount?: number
}

const colors = ['#b687ff', '#ff7aae', '#ffbd65', '#65d9ff', '#e6ed78', '#86efc3']
const artworkClasses = ['violet-orbit', 'pink-grid', 'sunset-drive', 'blue-waves', 'acid-dots', 'mint-planet']

export function formatDuration(seconds = 0) {
  return `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`
}

export function toSong(track: ApiTrack, index = 0): Song {
  return {
    id: track.id, title: track.title, artist: track.artist, album: track.album || 'Single',
    duration: formatDuration(track.durationSeconds), color: colors[index % colors.length],
    art: artworkClasses[index % artworkClasses.length], tags: [track.genre || 'Audius', track.mood || 'Discovery'],
    streamUrl: track.streamUrl ?? undefined, artUrl: track.artworkUrl ?? undefined, permalink: track.permalink ?? undefined,
    source: 'audius', artistId: track.artistId ?? undefined, durationSeconds: track.durationSeconds ?? 0,
    genre: track.genre ?? undefined,
  }
}

async function request<T>(path: string, init: RequestInit = {}, signal?: AbortSignal): Promise<ApiResponse<T>> {
  const { data } = await supabase.auth.getSession()
  const headers = new Headers(init.headers)
  headers.set('Accept', 'application/json')
  if (init.body) headers.set('Content-Type', 'application/json')
  if (data.session?.access_token) headers.set('Authorization', `Bearer ${data.session.access_token}`)
  const response = await fetch(`${API_BASE}${path}`, { ...init, headers, signal })
  const payload = await response.json().catch(() => ({})) as ApiResponse<T>
  if (!response.ok) throw new Error(payload.error || 'Unable to complete this request.')
  return payload
}

function tracks(payload: { tracks: ApiTrack[] }) { return payload.tracks.map(toSong) }

/**
 * The deployed frontend can still show music when the optional Express API is
 * offline or has not yet been deployed. Audius exposes these discovery routes
 * publicly and supports browser CORS requests.
 */
function normalizeAudiusTrack(track: AudiusPublicTrack, index = 0): Song {
  return toSong({
    id: track.id,
    title: track.title,
    artist: track.user?.name || 'Audius artist',
    artistId: track.user?.id ?? null,
    album: 'Audius release',
    artworkUrl: track.artwork?._1000x1000 ?? track.artwork?._480x480 ?? track.artwork?._150x150 ?? null,
    durationSeconds: track.duration ?? 0,
    genre: track.genre ?? null,
    mood: track.mood ?? null,
    permalink: track.permalink ?? null,
    streamUrl: `${AUDIUS_PUBLIC_API}/tracks/${encodeURIComponent(track.id)}/stream`,
    playCount: track.play_count ?? track.playCount ?? 0,
  }, index)
}

async function publicAudiusTracks(path: string, signal?: AbortSignal): Promise<Song[]> {
  const response = await fetch(`${AUDIUS_PUBLIC_API}${path}`, {
    headers: { Accept: 'application/json' },
    signal,
  })
  if (!response.ok) throw new Error('Public music discovery is unavailable.')
  const payload = await response.json() as { data?: AudiusPublicTrack[] }
  return (payload.data ?? []).filter((track) => track.id && track.title).map(normalizeAudiusTrack)
}

export async function searchMusic(query: string, signal?: AbortSignal) {
  if (!query.trim()) return []
  try {
    return tracks(await request<{ tracks: ApiTrack[] }>(`/music/search?q=${encodeURIComponent(query.trim())}`, {}, signal))
  } catch {
    return publicAudiusTracks(`/tracks/search?query=${encodeURIComponent(query.trim())}&limit=20`, signal)
  }
}

export async function getTrendingTracks(signal?: AbortSignal) {
  try {
    return tracks(await request<{ tracks: ApiTrack[] }>('/music/trending', {}, signal))
  } catch {
    return publicAudiusTracks('/tracks/trending?limit=20', signal)
  }
}

export async function getTrack(id: string) {
  const payload = await request<{ track: ApiTrack; related: ApiTrack[] }>(`/music/track/${encodeURIComponent(id)}`)
  return { track: toSong(payload.track), related: payload.related.map(toSong) }
}

export async function getArtist(id: string) {
  const payload = await request<{ artist: { id: string; name: string; handle?: string | null; imageUrl?: string | null; followerCount?: number | null; trackCount?: number | null }; tracks: ApiTrack[] }>(`/music/artist/${encodeURIComponent(id)}`)
  return { artist: payload.artist, tracks: payload.tracks.map(toSong) }
}

export async function getMoodRecommendations(mood: string) {
  try {
    const payload = await request<{ tracks: ApiTrack[] }>('/recommendations/mood', { method: 'POST', body: JSON.stringify({ mood }) })
    return tracks(payload)
  } catch {
    return publicAudiusTracks(`/tracks/search?query=${encodeURIComponent(mood)}&limit=20`)
  }
}

export async function getRouletteTrack() {
  try {
    const payload = await request<{ track: ApiTrack; route: string }>('/music/roulette')
    return { track: toSong(payload.track), route: payload.route }
  } catch {
    const liveTracks = await publicAudiusTracks('/tracks/trending?limit=40')
    const track = liveTracks[Math.floor(Math.random() * liveTracks.length)]
    if (!track) throw new Error('No live tracks are available right now.')
    return { track, route: 'A live Audius discovery route' }
  }
}

export type WeatherMix = { weather: { city: string; temperature: number; condition: string; description: string; icon: string }; mood: string; tracks: Song[] }
export async function getWeatherMix(city: string): Promise<WeatherMix> {
  const payload = await request<{ weather: WeatherMix['weather']; mood: string; tracks: ApiTrack[] }>(`/recommendations/weather?city=${encodeURIComponent(city)}`)
  return { weather: payload.weather, mood: payload.mood, tracks: payload.tracks.map(toSong) }
}

export async function getTravelPlaylist(destination: string, mood: string, duration: number, activity?: string) {
  try {
    const payload = await request<{ title: string; tracks: ApiTrack[] }>('/playlists/travel', { method: 'POST', body: JSON.stringify({ destination, mood, duration, activity }) })
    return { title: payload.title, tracks: payload.tracks.map(toSong) }
  } catch {
    const query = [mood, activity].filter(Boolean).join(' ') || destination
    return { title: `${destination} ${mood} route`, tracks: await publicAudiusTracks(`/tracks/search?query=${encodeURIComponent(query)}&limit=20`) }
  }
}

export async function getGlobeCountry(country: string) {
  try {
    const payload = await request<{ country: string; genres: string[]; tracks: ApiTrack[] }>(`/globe/${encodeURIComponent(country)}`)
    return { ...payload, tracks: payload.tracks.map(toSong) }
  } catch {
    const genres: Record<string, string[]> = {
      India: ['Bollywood', 'Punjabi', 'Carnatic'], Japan: ['City Pop', 'Anime', 'Jazz'],
      USA: ['Hip Hop', 'Rock', 'Country'], UK: ['Indie', 'Pop', 'Electronic'],
      Brazil: ['Samba', 'Bossa Nova', 'Baile funk'], Korea: ['K-pop', 'R&B', 'Indie'],
    }
    const localGenres = genres[country] ?? ['Global']
    return { country, genres: localGenres, tracks: await publicAudiusTracks(`/tracks/search?query=${encodeURIComponent(localGenres[0])}&limit=20`) }
  }
}

function songPayload(song: Song) {
  return { id: song.id, title: song.title, artist: song.artist, artistId: song.artistId ?? null, album: song.album, artworkUrl: song.artUrl ?? null, durationSeconds: song.durationSeconds ?? 0, genre: song.genre ?? song.tags[0] ?? null, streamUrl: song.streamUrl }
}

export async function recordHistory(song: Song) { return request('/history', { method: 'POST', body: JSON.stringify(songPayload(song)) }) }
export async function saveTrack(song: Song) { return request('/library/save', { method: 'POST', body: JSON.stringify(songPayload(song)) }) }
export async function removeTrack(id: string) { return request(`/library/${encodeURIComponent(id)}`, { method: 'DELETE' }) }
type LibraryTrack = ApiTrack & { externalTrackId?: string }

function savedTrackToSong(track: LibraryTrack, index = 0): Song {
  return toSong({ ...track, id: track.externalTrackId ?? track.id }, index)
}

export type LibraryData = {
  favorites: Song[]
  history: Song[]
  playlists: Array<{ id: string; title: string; description?: string | null; _count: { tracks: number } }>
}

export async function getLibrary(): Promise<LibraryData> {
  const payload = await request<{ favorites: LibraryTrack[]; history: LibraryTrack[]; playlists: LibraryData['playlists'] }>('/library')
  return {
    favorites: payload.favorites.map(savedTrackToSong),
    history: payload.history.map(savedTrackToSong),
    playlists: payload.playlists,
  }
}

export type ProfileData = {
  user: { displayName: string; email: string; avatarUrl?: string | null } | null
  stats: { favorites: number; history: number; artists: number; playlists: number }
}

export async function getProfile(): Promise<ProfileData> { return request<ProfileData>('/profile') }
export async function updateProfile(profile: { displayName: string; avatarUrl?: string | null }) { return request<{ user: NonNullable<ProfileData['user']> }>('/profile', { method: 'PATCH', body: JSON.stringify(profile) }) }
export async function createPlaylist(input: { title: string; description?: string; source?: 'TRAVEL' | 'MANUAL' | 'MOOD' | 'WEATHER' | 'ROULETTE' }) {
  return request<{ playlist: { id: string; title: string } }>('/playlists', { method: 'POST', body: JSON.stringify(input) })
}
export async function addTrackToPlaylist(playlistId: string, song: Song) {
  return request(`/playlists/${encodeURIComponent(playlistId)}/tracks`, { method: 'POST', body: JSON.stringify(songPayload(song)) })
}
export async function getTrackedArtists() { return request<{ artists: Array<{ externalArtistId: string; name: string; handle?: string | null; imageUrl?: string | null }> }>('/artists/tracked') }
export async function trackArtist(artist: { id: string; name: string; handle?: string | null; imageUrl?: string | null }) { return request('/artists/track', { method: 'POST', body: JSON.stringify({ artistId: artist.id, name: artist.name, handle: artist.handle, imageUrl: artist.imageUrl }) }) }
export async function untrackArtist(id: string) { return request(`/artists/track/${encodeURIComponent(id)}`, { method: 'DELETE' }) }
