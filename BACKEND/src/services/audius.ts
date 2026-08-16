import axios from 'axios'

const AUDIUS_API_URL =
  'https://api.audius.co/v1'

type AudiusUser = {
  id?: string
  name?: string
  handle?: string
  profile_picture?: AudiusArtwork
}

type AudiusArtwork = {
  _150x150?: string
  _480x480?: string
  _1000x1000?: string
}

type AudiusTrack = {
  id: string
  title: string
  duration?: number
  artwork?: AudiusArtwork
  user?: AudiusUser
  genre?: string
  mood?: string
  permalink?: string
  playCount?: number
  isStreamable?: string
}

type AudiusResponse<T> = {
  data: T
}

export type AuralTrack = {
  id: string
  title: string
  artist: string
  artistId: string | null
  album: string
  artworkUrl: string | null
  durationSeconds: number
  genre: string | null
  mood: string | null
  permalink: string | null
  streamUrl: string
  playCount: number
  provider: 'audius'
}

export type AuralArtist = {
  id: string
  name: string
  handle: string | null
  imageUrl: string | null
  followerCount: number | null
  trackCount: number | null
  provider: 'audius'
}

function getArtwork(
  track: AudiusTrack,
): string | null {
  return (
    track.artwork?._1000x1000 ??
    track.artwork?._480x480 ??
    track.artwork?._150x150 ??
    null
  )
}

function normalizeTrack(
  track: AudiusTrack,
): AuralTrack {
  return {
    id: track.id,

    title: track.title,

    artist:
      track.user?.name ??
      'Unknown Artist',

    artistId:
      track.user?.id ?? null,

    album: '',

    artworkUrl:
      getArtwork(track),

    durationSeconds:
      track.duration ?? 0,

    genre:
      track.genre ?? null,

    mood:
      track.mood ?? null,

    permalink:
      track.permalink ?? null,

    streamUrl:
      `${AUDIUS_API_URL}/tracks/${track.id}/stream`,

    playCount:
      track.playCount ?? 0,

    provider: 'audius',
  }
}

/* -------------------------------------------
   SEARCH
-------------------------------------------- */

export async function searchAudiusTracks(
  query: string,
  limit = 20,
): Promise<AuralTrack[]> {
  const cleanQuery =
    query.trim()

  if (!cleanQuery) {
    return []
  }

  const response =
    await axios.get<
      AudiusResponse<AudiusTrack[]>
    >(
      `${AUDIUS_API_URL}/tracks/search`,
      {
        params: {
          query: cleanQuery,
          limit: Math.min(
            Math.max(limit, 1),
            50,
          ),
        },

        timeout: 10000,
      },
    )

  return response.data.data.map(
    normalizeTrack,
  )
}

export async function getAudiusArtist(
  artistId: string,
): Promise<AuralArtist> {
  const response = await axios.get<
    AudiusResponse<AudiusUser & {
      follower_count?: number
      track_count?: number
    }>
  >(`${AUDIUS_API_URL}/users/${encodeURIComponent(artistId)}`, {
    timeout: 10000,
  })

  const artist = response.data.data
  if (!artist.id || !artist.name) {
    throw new Error('Artist not found')
  }

  return {
    id: artist.id,
    name: artist.name,
    handle: artist.handle ?? null,
    imageUrl:
      artist.profile_picture?._1000x1000 ??
      artist.profile_picture?._480x480 ??
      artist.profile_picture?._150x150 ??
      null,
    followerCount: artist.follower_count ?? null,
    trackCount: artist.track_count ?? null,
    provider: 'audius',
  }
}

export async function getAudiusArtistTracks(
  artistId: string,
  limit = 20,
): Promise<AuralTrack[]> {
  const response = await axios.get<AudiusResponse<AudiusTrack[]>>(
    `${AUDIUS_API_URL}/users/${encodeURIComponent(artistId)}/tracks`,
    {
      params: { limit: Math.min(Math.max(limit, 1), 50) },
      timeout: 10000,
    },
  )

  return response.data.data.map(normalizeTrack)
}

/* -------------------------------------------
   SINGLE TRACK
-------------------------------------------- */

export async function getAudiusTrack(
  trackId: string,
): Promise<AuralTrack> {
  const response =
    await axios.get<
      AudiusResponse<AudiusTrack>
    >(
      `${AUDIUS_API_URL}/tracks/${encodeURIComponent(
        trackId,
      )}`,
      {
        timeout: 10000,
      },
    )

  return normalizeTrack(
    response.data.data,
  )
}

/* -------------------------------------------
   TRENDING
-------------------------------------------- */

export async function getTrendingAudiusTracks(
  limit = 20,
): Promise<AuralTrack[]> {
  const response =
    await axios.get<
      AudiusResponse<AudiusTrack[]>
    >(
      `${AUDIUS_API_URL}/tracks/trending`,
      {
        params: {
          limit: Math.min(
            Math.max(limit, 1),
            100,
          ),
        },

        timeout: 10000,
      },
    )

  return response.data.data.map(
    normalizeTrack,
  )
}
