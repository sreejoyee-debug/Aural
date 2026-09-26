import axios from 'axios'
import type { AuralArtist, AuralTrack } from './audius.js'

type ItunesSong = {
  trackId?: number
  trackName?: string
  artistName?: string
  artistId?: number
  collectionName?: string
  artworkUrl100?: string
  previewUrl?: string
  trackTimeMillis?: number
  primaryGenreName?: string
  trackViewUrl?: string
}

type ItunesResponse = { results?: ItunesSong[] }

function artwork(url?: string) {
  return url ? url.replace('100x100', '600x600').replace('100x100bb', '600x600bb') : null
}

function normalize(song: ItunesSong): AuralTrack | null {
  if (!song.trackId || !song.trackName || !song.previewUrl) return null
  return {
    id: `itunes:${song.trackId}`,
    title: song.trackName,
    artist: song.artistName ?? 'Unknown Artist',
    artistId: song.artistId ? `itunes:${song.artistId}` : null,
    album: song.collectionName ?? 'Single',
    artworkUrl: artwork(song.artworkUrl100),
    durationSeconds: Math.round((song.trackTimeMillis ?? 0) / 1000),
    genre: song.primaryGenreName ?? null,
    mood: null,
    permalink: song.trackViewUrl ?? null,
    streamUrl: song.previewUrl,
    playCount: 0,
    provider: 'itunes',
  }
}

export async function searchItunesTracks(query: string, limit = 20): Promise<AuralTrack[]> {
  const cleaned = query.trim()
  if (!cleaned) return []
  const { data } = await axios.get<ItunesResponse>('https://itunes.apple.com/search', {
    params: { term: cleaned, media: 'music', entity: 'song', limit: Math.min(Math.max(limit, 1), 50) },
    timeout: 10000,
  })
  return (data.results ?? []).map(normalize).filter((track): track is AuralTrack => Boolean(track))
}

export async function getItunesArtistTracks(artistId: string, limit = 20): Promise<AuralTrack[]> {
  const numericId = artistId.replace(/^itunes:/, '')
  const { data } = await axios.get<ItunesResponse>('https://itunes.apple.com/lookup', {
    params: { id: numericId, entity: 'song', limit: Math.min(Math.max(limit, 1), 50) },
    timeout: 10000,
  })
  return (data.results ?? [])
    .filter((item) => item.trackId)
    .map(normalize)
    .filter((track): track is AuralTrack => Boolean(track))
}

export async function getItunesTrack(id: string): Promise<AuralTrack> {
  const numericId = id.replace(/^itunes:/, '')
  const { data } = await axios.get<ItunesResponse>('https://itunes.apple.com/lookup', {
    params: { id: numericId, entity: 'song' },
    timeout: 10000,
  })
  const track = normalize(data.results?.[0] ?? {})
  if (!track) throw new Error('Track not found')
  return track
}

export async function searchItunesArtists(query: string, limit = 10): Promise<AuralArtist[]> {
  const cleaned = query.trim()
  if (!cleaned) return []
  const { data } = await axios.get<{ results?: Array<{ artistId?: number; artistName?: string; primaryGenreName?: string }> }>(
    'https://itunes.apple.com/search',
    { params: { term: cleaned, media: 'music', entity: 'musicArtist', limit: Math.min(Math.max(limit, 1), 25) }, timeout: 10000 },
  )
  return (data.results ?? [])
    .filter((artist) => artist.artistId && artist.artistName)
    .map((artist) => ({
      id: `itunes:${artist.artistId}`,
      name: artist.artistName as string,
      handle: artist.primaryGenreName ?? null,
      imageUrl: null,
      followerCount: null,
      trackCount: null,
      provider: 'itunes',
    }))
}
