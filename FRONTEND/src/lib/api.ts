import type { Song } from '../data'
import { supabase } from './supabase'

const API_BASE = import.meta.env.VITE_API_URL ?? '/api'

type ApiTrack = {
  id: string; title: string; artist: string; artistId?: string | null; album?: string | null
  artworkUrl?: string | null; durationSeconds?: number; genre?: string | null; mood?: string | null
  permalink?: string | null; streamUrl?: string | null; playCount?: number
}

type ApiResponse<T> = T & { success?: boolean; error?: string }

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

export async function searchMusic(query: string, signal?: AbortSignal) {
  if (!query.trim()) return []
  return tracks(await request<{ tracks: ApiTrack[] }>(`/music/search?q=${encodeURIComponent(query.trim())}`, {}, signal))
}

export async function getTrendingTracks(signal?: AbortSignal) {
  return tracks(await request<{ tracks: ApiTrack[] }>('/music/trending', {}, signal))
}

export async function getTrack(id: string) {
  const payload = await request<{ track: ApiTrack; related: ApiTrack[] }>(`/music/track/${encodeURIComponent(id)}`)
  return { track: toSong(payload.track), related: payload.related.map(toSong) }
}

export async function getMoodRecommendations(mood: string) {
  const payload = await request<{ tracks: ApiTrack[] }>('/recommendations/mood', { method: 'POST', body: JSON.stringify({ mood }) })
  return tracks(payload)
}

export async function getRouletteTrack() {
  const payload = await request<{ track: ApiTrack }>('/music/roulette')
  return toSong(payload.track)
}

export type WeatherMix = { weather: { city: string; temperature: number; condition: string; description: string; icon: string }; mood: string; tracks: Song[] }
export async function getWeatherMix(city: string): Promise<WeatherMix> {
  const payload = await request<{ weather: WeatherMix['weather']; mood: string; tracks: ApiTrack[] }>(`/recommendations/weather?city=${encodeURIComponent(city)}`)
  return { weather: payload.weather, mood: payload.mood, tracks: payload.tracks.map(toSong) }
}

export async function getTravelPlaylist(destination: string, mood: string, duration: number, activity?: string) {
  const payload = await request<{ title: string; tracks: ApiTrack[] }>('/playlists/travel', { method: 'POST', body: JSON.stringify({ destination, mood, duration, activity }) })
  return { title: payload.title, tracks: payload.tracks.map(toSong) }
}

export async function getGlobeCountry(country: string) {
  const payload = await request<{ country: string; genres: string[]; tracks: ApiTrack[] }>(`/globe/${encodeURIComponent(country)}`)
  return { ...payload, tracks: payload.tracks.map(toSong) }
}

function songPayload(song: Song) {
  return { id: song.id, title: song.title, artist: song.artist, artistId: song.artistId ?? null, album: song.album, artworkUrl: song.artUrl ?? null, durationSeconds: song.durationSeconds ?? 0, genre: song.genre ?? song.tags[0] ?? null, streamUrl: song.streamUrl }
}

export async function recordHistory(song: Song) { return request('/history', { method: 'POST', body: JSON.stringify(songPayload(song)) }) }
export async function saveTrack(song: Song) { return request('/library/save', { method: 'POST', body: JSON.stringify(songPayload(song)) }) }
export async function removeTrack(id: string) { return request(`/library/${encodeURIComponent(id)}`, { method: 'DELETE' }) }
export async function getLibrary() { return request<{ favorites: Array<ApiTrack>; history: Array<ApiTrack>; playlists: Array<{ id: string; title: string; description?: string; _count: { tracks: number } }> }>('/library') }
export async function getProfile() { return request<{ user: { displayName: string; email: string }; stats: { favorites: number; history: number; artists: number; playlists: number } }>('/profile') }
export async function getTrackedArtists() { return request<{ artists: Array<{ externalArtistId: string; name: string; handle?: string; imageUrl?: string }> }>('/artists/tracked') }
export async function trackArtist(artist: { id: string; name: string; handle?: string | null; imageUrl?: string | null }) { return request('/artists/track', { method: 'POST', body: JSON.stringify({ artistId: artist.id, name: artist.name, handle: artist.handle, imageUrl: artist.imageUrl }) }) }
export async function untrackArtist(id: string) { return request(`/artists/track/${encodeURIComponent(id)}`, { method: 'DELETE' }) }
