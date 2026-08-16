import 'dotenv/config'
import axios from 'axios'
import cors from 'cors'
import express, { type NextFunction, type Request, type Response } from 'express'
import { PrismaClient, type PlaylistSource } from './generated/prisma/index.js'
import { z } from 'zod'
import {
  getAudiusArtist,
  getAudiusArtistTracks,
  getAudiusTrack,
  getTrendingAudiusTracks,
  searchAudiusTracks,
  type AuralTrack,
} from './services/audius.js'

const app = express()
const prisma = new PrismaClient()
const port = Number(process.env.PORT ?? 4000)
const musicLimit = 20

app.use(cors({ origin: process.env.CLIENT_ORIGIN ?? 'http://localhost:5173' }))
app.use(express.json({ limit: '100kb' }))

type Recommendation = AuralTrack & { reason: string; energy: number }

interface MusicIntelligenceProvider {
  recommendFromMood(mood: string): Promise<Recommendation[]>
  replyAsDj(message: string): Promise<{ reply: string; queue: Recommendation[] }>
}

const moodQueries: Record<string, string> = {
  happy: 'happy', sad: 'sad', relaxed: 'ambient', energetic: 'electronic',
  romantic: 'romantic', focus: 'lofi', party: 'dance', chill: 'chill',
  workout: 'workout', rainy: 'lofi', heartbroken: 'indie', gym: 'workout',
  study: 'focus', sunrise: 'acoustic', 'late night': 'synthwave',
}

function moodQuery(mood: string) {
  return moodQueries[mood.trim().toLowerCase()] ?? mood.trim()
}

class AudiusMusicProvider implements MusicIntelligenceProvider {
  async recommendFromMood(mood: string): Promise<Recommendation[]> {
    const tracks = await searchAudiusTracks(moodQuery(mood), musicLimit)
    const source = tracks.length ? tracks : await getTrendingAudiusTracks(musicLimit)
    return source.map((track, index) => ({
      ...track,
      reason: `Matched from Audius for ${mood}.`,
      energy: Math.max(0.2, Math.min(0.95, 0.48 + (index % 6) * 0.08)),
    }))
  }

  async replyAsDj(): Promise<{ reply: string; queue: Recommendation[] }> {
    throw new Error('AI DJ is intentionally not implemented yet.')
  }
}

const music: MusicIntelligenceProvider = new AudiusMusicProvider()

type AuthUser = { id: string; email: string; displayName: string }
type AuthedRequest = Request & { user?: AuthUser }

async function getSupabaseUser(token: string): Promise<AuthUser | null> {
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_PUBLISHABLE_KEY
  if (!url || !key) return null

  const { data } = await axios.get<{ id: string; email?: string; user_metadata?: { name?: string } }>(
    `${url.replace(/\/$/, '')}/auth/v1/user`,
    { headers: { apikey: key, Authorization: `Bearer ${token}` }, timeout: 10000 },
  )

  if (!data.id || !data.email) return null
  return {
    id: data.id,
    email: data.email,
    displayName: data.user_metadata?.name?.slice(0, 60) || data.email.split('@')[0],
  }
}

async function requireUser(request: AuthedRequest, response: Response, next: NextFunction) {
  const token = request.headers.authorization?.replace(/^Bearer\s+/i, '')
  if (!token) return response.status(401).json({ success: false, error: 'Authentication is required.' })

  try {
    const user = await getSupabaseUser(token)
    if (!user) return response.status(401).json({ success: false, error: 'Your session is invalid or expired.' })
    await prisma.user.upsert({
      where: { id: user.id },
      update: { email: user.email, displayName: user.displayName },
      create: { id: user.id, email: user.email, displayName: user.displayName },
    })
    request.user = user
    return next()
  } catch {
    return response.status(401).json({ success: false, error: 'Unable to validate your session.' })
  }
}

const trackInput = z.object({
  id: z.string().min(1).max(128), title: z.string().min(1).max(300), artist: z.string().min(1).max(300),
  artistId: z.string().max(128).nullable().optional(), album: z.string().max(300).optional(),
  artworkUrl: z.string().url().nullable().optional(), durationSeconds: z.number().int().min(0).max(36000).optional(),
  genre: z.string().max(100).nullable().optional(), streamUrl: z.string().url().optional(),
})

function parseTrack(body: unknown) {
  return trackInput.safeParse(body)
}

async function persistCatalogTrack(track: z.infer<typeof trackInput>) {
  const artist = await prisma.artist.upsert({
    where: { name: track.artist }, update: {}, create: { name: track.artist },
  })
  return prisma.track.upsert({
    where: { externalId: track.id },
    update: { title: track.title, album: track.album, artworkUrl: track.artworkUrl, durationSeconds: track.durationSeconds ?? 0, artistId: artist.id },
    create: { externalId: track.id, title: track.title, album: track.album, artworkUrl: track.artworkUrl, durationSeconds: track.durationSeconds ?? 0, artistId: artist.id },
  })
}

function trackSnapshot(track: z.infer<typeof trackInput>) {
  return {
    externalTrackId: track.id, title: track.title, artist: track.artist, artistId: track.artistId ?? null,
    album: track.album ?? null, artworkUrl: track.artworkUrl ?? null, durationSeconds: track.durationSeconds ?? 0,
    genre: track.genre ?? null, streamUrl: track.streamUrl ?? null,
  }
}

function weatherMood(condition: string) {
  const value = condition.toLowerCase()
  if (value.includes('rain') || value.includes('drizzle')) return 'chill'
  if (value.includes('thunder') || value.includes('storm')) return 'intense electronic'
  if (value.includes('clear') && value.includes('night')) return 'ambient'
  if (value.includes('clear') || value.includes('sun')) return 'happy dance'
  if (value.includes('cloud')) return 'relaxed indie'
  if (value.includes('snow')) return 'piano ambient'
  return 'chill'
}

const countryGenres: Record<string, string[]> = {
  India: ['Bollywood', 'Punjabi', 'Carnatic'], Japan: ['City Pop', 'Anime', 'Jazz'],
  USA: ['Hip Hop', 'Rock', 'Country'], UK: ['Indie', 'Pop', 'Electronic'],
  Brazil: ['Samba', 'Bossa Nova', 'Baile funk'], Korea: ['K-pop', 'R&B', 'Indie'],
}

app.get('/health', (_request, response) => response.json({ success: true, service: 'aural-api' }))

app.get('/api/music/search', async (request, response) => {
  const query = String(request.query.q ?? '').trim()
  if (!query) return response.status(400).json({ success: false, error: 'Search query is required.' })
  try {
    const tracks = await searchAudiusTracks(query, musicLimit)
    return response.json({ success: true, provider: 'audius', query, tracks })
  } catch {
    return response.status(502).json({ success: false, error: 'Unable to fetch music right now.' })
  }
})

app.get('/api/music/trending', async (_request, response) => {
  try { return response.json({ success: true, provider: 'audius', tracks: await getTrendingAudiusTracks(musicLimit) }) }
  catch { return response.status(502).json({ success: false, error: 'Unable to fetch trending music right now.' }) }
})

app.get('/api/music/track/:id', async (request, response) => {
  try {
    const track = await getAudiusTrack(String(request.params.id))
    const related = track.genre ? await searchAudiusTracks(track.genre, 8) : await getTrendingAudiusTracks(8)
    return response.json({ success: true, provider: 'audius', track, related: related.filter((item) => item.id !== track.id) })
  } catch { return response.status(404).json({ success: false, error: 'Track not found.' }) }
})

app.get('/api/music/artist/:id', async (request, response) => {
  try {
    const artistId = String(request.params.id)
    const [artist, tracks] = await Promise.all([getAudiusArtist(artistId), getAudiusArtistTracks(artistId)])
    return response.json({ success: true, artist, tracks })
  } catch { return response.status(404).json({ success: false, error: 'Artist not found.' }) }
})

app.get('/api/music/roulette', async (_request, response) => {
  try {
    const tracks = await getTrendingAudiusTracks(50)
    const track = tracks[Math.floor(Math.random() * tracks.length)]
    if (!track) return response.status(404).json({ success: false, error: 'No tracks are available right now.' })
    return response.json({ success: true, track })
  } catch { return response.status(502).json({ success: false, error: 'Unable to spin Roulette right now.' }) }
})

app.post('/api/recommendations/mood', async (request, response) => {
  const body = z.object({ mood: z.string().trim().min(2).max(80) }).safeParse(request.body)
  if (!body.success) return response.status(400).json({ success: false, error: 'A mood between 2 and 80 characters is required.' })
  try { return response.json({ success: true, mood: body.data.mood, tracks: await music.recommendFromMood(body.data.mood) }) }
  catch { return response.status(502).json({ success: false, error: 'Unable to find music for that mood.' }) }
})

app.get('/api/weather/current', async (request, response) => {
  const city = String(request.query.city ?? '').trim()
  if (!city) return response.status(400).json({ success: false, error: 'A city is required.' })
  if (!process.env.OPENWEATHER_API_KEY) return response.status(503).json({ success: false, error: 'Weather service is not configured.' })
  try {
    const { data } = await axios.get<{ name: string; main: { temp: number; humidity: number }; wind: { speed: number }; weather: Array<{ main: string; description: string; icon: string }> }>(
      'https://api.openweathermap.org/data/2.5/weather',
      { params: { q: city, units: 'metric', appid: process.env.OPENWEATHER_API_KEY }, timeout: 10000 },
    )
    const current = data.weather[0]
    return response.json({ success: true, weather: { city: data.name, temperature: data.main.temp, humidity: data.main.humidity, windSpeed: data.wind.speed, condition: current?.main ?? 'Unknown', description: current?.description ?? '', icon: current?.icon ?? '' } })
  } catch { return response.status(502).json({ success: false, error: 'Unable to fetch weather for that city.' }) }
})

app.get('/api/recommendations/weather', async (request, response) => {
  const city = String(request.query.city ?? '').trim()
  if (!city) return response.status(400).json({ success: false, error: 'A city is required.' })
  if (!process.env.OPENWEATHER_API_KEY) return response.status(503).json({ success: false, error: 'Weather service is not configured.' })
  try {
    const { data } = await axios.get<{ name: string; main: { temp: number }; weather: Array<{ main: string; description: string; icon: string }> }>(
      'https://api.openweathermap.org/data/2.5/weather',
      { params: { q: city, units: 'metric', appid: process.env.OPENWEATHER_API_KEY }, timeout: 10000 },
    )
    const condition = data.weather[0]?.main ?? 'Clouds'
    const mood = weatherMood(condition)
    return response.json({ success: true, weather: { city: data.name, temperature: data.main.temp, condition, description: data.weather[0]?.description ?? '', icon: data.weather[0]?.icon ?? '' }, mood, tracks: await music.recommendFromMood(mood) })
  } catch { return response.status(502).json({ success: false, error: 'Unable to create a weather mix right now.' }) }
})

app.post('/api/playlists/travel', async (request, response) => {
  const body = z.object({ destination: z.string().trim().min(2).max(120), mood: z.string().trim().min(2).max(80), duration: z.number().int().min(1).max(365), activity: z.string().trim().max(80).optional() }).safeParse(request.body)
  if (!body.success) return response.status(400).json({ success: false, error: 'Destination, mood, and duration are required.' })
  try {
    const query = `${body.data.mood} ${body.data.activity ?? ''}`.trim()
    const tracks = await searchAudiusTracks(query, musicLimit)
    return response.json({ success: true, title: `${body.data.destination} ${body.data.mood} route`, destination: body.data.destination, duration: body.data.duration, tracks: tracks.length ? tracks : await music.recommendFromMood(body.data.mood) })
  } catch { return response.status(502).json({ success: false, error: 'Unable to build this travel playlist.' }) }
})

app.get('/api/globe/:country', async (request, response) => {
  const country = decodeURIComponent(String(request.params.country))
  const genres = countryGenres[country]
  if (!genres) return response.status(404).json({ success: false, error: 'This region is not available yet.' })
  try {
    const tracks = await searchAudiusTracks(genres[0], musicLimit)
    return response.json({ success: true, country, genres, tracks })
  } catch { return response.status(502).json({ success: false, error: 'Unable to fetch music for this region.' }) }
})

app.get('/api/profile', requireUser, async (request: AuthedRequest, response) => {
  try {
    const userId = request.user!.id
    const [user, favorites, history, artists, playlists] = await Promise.all([
      prisma.user.findUnique({ where: { id: userId }, select: { id: true, email: true, displayName: true, avatarUrl: true, createdAt: true } }),
      prisma.favoriteTrack.count({ where: { userId } }),
      prisma.listeningHistory.count({ where: { userId } }),
      prisma.trackedArtist.count({ where: { userId } }),
      prisma.playlist.count({ where: { ownerId: userId } }),
    ])
    return response.json({ success: true, user, stats: { favorites, history, artists, playlists } })
  } catch { return response.status(500).json({ success: false, error: 'Unable to load your profile.' }) }
})

app.patch('/api/profile', requireUser, async (request: AuthedRequest, response) => {
  const body = z.object({ displayName: z.string().trim().min(1).max(60), avatarUrl: z.string().url().nullable().optional() }).safeParse(request.body)
  if (!body.success) return response.status(400).json({ success: false, error: 'A valid display name is required.' })
  try {
    const user = await prisma.user.update({ where: { id: request.user!.id }, data: { displayName: body.data.displayName, avatarUrl: body.data.avatarUrl ?? null }, select: { id: true, email: true, displayName: true, avatarUrl: true } })
    return response.json({ success: true, user })
  } catch { return response.status(500).json({ success: false, error: 'Unable to update your profile.' }) }
})

app.get('/api/library', requireUser, async (request: AuthedRequest, response) => {
  try {
    const [favorites, playlists, history] = await Promise.all([
      prisma.favoriteTrack.findMany({ where: { userId: request.user!.id }, orderBy: { createdAt: 'desc' } }),
      prisma.playlist.findMany({ where: { ownerId: request.user!.id }, include: { _count: { select: { tracks: true } } }, orderBy: { updatedAt: 'desc' } }),
      prisma.listeningHistory.findMany({ where: { userId: request.user!.id }, orderBy: { playedAt: 'desc' }, take: 50 }),
    ])
    return response.json({ success: true, favorites, playlists, history })
  } catch { return response.status(500).json({ success: false, error: 'Unable to load your library.' }) }
})

app.post('/api/library/save', requireUser, async (request: AuthedRequest, response) => {
  const parsed = parseTrack(request.body)
  if (!parsed.success) return response.status(400).json({ success: false, error: 'A valid track is required.' })
  try {
    const favorite = await prisma.favoriteTrack.upsert({ where: { userId_externalTrackId: { userId: request.user!.id, externalTrackId: parsed.data.id } }, update: trackSnapshot(parsed.data), create: { userId: request.user!.id, ...trackSnapshot(parsed.data) } })
    return response.status(201).json({ success: true, favorite })
  } catch { return response.status(500).json({ success: false, error: 'Unable to save this track.' }) }
})

app.delete('/api/library/:trackId', requireUser, async (request: AuthedRequest, response) => {
  try { await prisma.favoriteTrack.delete({ where: { userId_externalTrackId: { userId: request.user!.id, externalTrackId: String(request.params.trackId) } } }); return response.json({ success: true }) }
  catch { return response.status(404).json({ success: false, error: 'Saved track not found.' }) }
})

app.get('/api/history', requireUser, async (request: AuthedRequest, response) => {
  try { return response.json({ success: true, history: await prisma.listeningHistory.findMany({ where: { userId: request.user!.id }, orderBy: { playedAt: 'desc' }, take: 100 }) }) }
  catch { return response.status(500).json({ success: false, error: 'Unable to load listening history.' }) }
})

app.post('/api/history', requireUser, async (request: AuthedRequest, response) => {
  const parsed = parseTrack(request.body)
  if (!parsed.success) return response.status(400).json({ success: false, error: 'A valid track is required.' })
  try { const history = await prisma.listeningHistory.create({ data: { userId: request.user!.id, ...trackSnapshot(parsed.data) } }); return response.status(201).json({ success: true, history }) }
  catch { return response.status(500).json({ success: false, error: 'Unable to record listening history.' }) }
})

app.get('/api/artists/tracked', requireUser, async (request: AuthedRequest, response) => {
  try { return response.json({ success: true, artists: await prisma.trackedArtist.findMany({ where: { userId: request.user!.id }, orderBy: { createdAt: 'desc' } }) }) }
  catch { return response.status(500).json({ success: false, error: 'Unable to load tracked artists.' }) }
})

app.post('/api/artists/track', requireUser, async (request: AuthedRequest, response) => {
  const body = z.object({ artistId: z.string().min(1).max(128), name: z.string().min(1).max(300), handle: z.string().max(100).nullable().optional(), imageUrl: z.string().url().nullable().optional() }).safeParse(request.body)
  if (!body.success) return response.status(400).json({ success: false, error: 'A valid artist is required.' })
  try { const artist = await prisma.trackedArtist.upsert({ where: { userId_externalArtistId: { userId: request.user!.id, externalArtistId: body.data.artistId } }, update: { name: body.data.name, handle: body.data.handle ?? null, imageUrl: body.data.imageUrl ?? null }, create: { userId: request.user!.id, externalArtistId: body.data.artistId, name: body.data.name, handle: body.data.handle ?? null, imageUrl: body.data.imageUrl ?? null } }); return response.status(201).json({ success: true, artist }) }
  catch { return response.status(500).json({ success: false, error: 'Unable to track this artist.' }) }
})

app.delete('/api/artists/track/:artistId', requireUser, async (request: AuthedRequest, response) => {
  try { await prisma.trackedArtist.delete({ where: { userId_externalArtistId: { userId: request.user!.id, externalArtistId: String(request.params.artistId) } } }); return response.json({ success: true }) }
  catch { return response.status(404).json({ success: false, error: 'Tracked artist not found.' }) }
})

app.get('/api/artists/:artistId', async (request, response) => {
  try { const artistId = String(request.params.artistId); const [artist, tracks] = await Promise.all([getAudiusArtist(artistId), getAudiusArtistTracks(artistId)]); return response.json({ success: true, artist, tracks }) }
  catch { return response.status(404).json({ success: false, error: 'Artist not found.' }) }
})

app.get('/api/playlists', requireUser, async (request: AuthedRequest, response) => {
  try { return response.json({ success: true, playlists: await prisma.playlist.findMany({ where: { ownerId: request.user!.id }, include: { _count: { select: { tracks: true } } }, orderBy: { updatedAt: 'desc' } }) }) }
  catch { return response.status(500).json({ success: false, error: 'Unable to load playlists.' }) }
})

app.post('/api/playlists', requireUser, async (request: AuthedRequest, response) => {
  const body = z.object({ title: z.string().trim().min(1).max(120), description: z.string().trim().max(500).optional(), source: z.enum(['MANUAL', 'MOOD', 'WEATHER', 'TRAVEL', 'ROULETTE']).optional() }).safeParse(request.body)
  if (!body.success) return response.status(400).json({ success: false, error: 'A playlist title is required.' })
  try { const playlist = await prisma.playlist.create({ data: { ownerId: request.user!.id, title: body.data.title, description: body.data.description, source: (body.data.source ?? 'MANUAL') as PlaylistSource } }); return response.status(201).json({ success: true, playlist }) }
  catch { return response.status(500).json({ success: false, error: 'Unable to create playlist.' }) }
})

app.post('/api/playlists/:id/tracks', requireUser, async (request: AuthedRequest, response) => {
  const parsed = parseTrack(request.body)
  if (!parsed.success) return response.status(400).json({ success: false, error: 'A valid track is required.' })
  try {
    const playlist = await prisma.playlist.findFirst({ where: { id: String(request.params.id), ownerId: request.user!.id }, include: { _count: { select: { tracks: true } } } })
    if (!playlist) return response.status(404).json({ success: false, error: 'Playlist not found.' })
    const track = await persistCatalogTrack(parsed.data)
    const item = await prisma.playlistTrack.upsert({ where: { playlistId_trackId: { playlistId: playlist.id, trackId: track.id } }, update: {}, create: { playlistId: playlist.id, trackId: track.id, position: playlist._count.tracks } })
    return response.status(201).json({ success: true, item })
  } catch { return response.status(500).json({ success: false, error: 'Unable to add this track to the playlist.' }) }
})

app.delete('/api/playlists/:id/tracks/:trackId', requireUser, async (request: AuthedRequest, response) => {
  try {
    const playlist = await prisma.playlist.findFirst({ where: { id: String(request.params.id), ownerId: request.user!.id } })
    if (!playlist) return response.status(404).json({ success: false, error: 'Playlist not found.' })
    const track = await prisma.track.findUnique({ where: { externalId: String(request.params.trackId) } })
    if (!track) return response.status(404).json({ success: false, error: 'Track not found.' })
    await prisma.playlistTrack.delete({ where: { playlistId_trackId: { playlistId: playlist.id, trackId: track.id } } })
    return response.json({ success: true })
  } catch { return response.status(404).json({ success: false, error: 'Playlist track not found.' }) }
})

app.post('/api/discovery/dj', (_request, response) => response.status(501).json({ success: false, error: 'AI DJ is not implemented yet.' }))

app.use((_request, response) => response.status(404).json({ success: false, error: 'Route not found.' }))

app.listen(port, () => console.log(`AURAL API listening at http://localhost:${port}`))
