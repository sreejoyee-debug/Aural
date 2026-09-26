import {
  getAudiusArtist,
  getAudiusArtistTracks,
  getAudiusTrack,
  getTrendingAudiusTracks,
  searchAudiusArtists,
  searchAudiusTracks,
  type AuralArtist,
  type AuralTrack,
} from './audius.js'
import { getItunesArtistTracks, getItunesTrack, searchItunesArtists, searchItunesTracks } from './itunes.js'
import { countryCatalog, expandSearchQueries, queriesForLanguage } from './languages.js'

function uniqueTracks(tracks: AuralTrack[]) {
  const seen = new Set<string>()
  return tracks.filter((track) => {
    const key = `${track.title.toLowerCase()}::${track.artist.toLowerCase()}`
    if (seen.has(track.id) || seen.has(key)) return false
    seen.add(track.id)
    seen.add(key)
    return true
  })
}

async function searchAll(query: string, limit: number) {
  const [audius, itunes] = await Promise.allSettled([
    searchAudiusTracks(query, limit),
    searchItunesTracks(query, limit),
  ])
  return uniqueTracks([
    ...(audius.status === 'fulfilled' ? audius.value : []),
    ...(itunes.status === 'fulfilled' ? itunes.value : []),
  ])
}

export async function discoverTracks(query: string, lang?: string, limit = 20): Promise<AuralTrack[]> {
  const queries = expandSearchQueries(query, lang)
  if (!queries.length) return getCatalogTrending(lang, limit)

  const batches = await Promise.all(queries.map((item) => searchAll(item, Math.max(8, Math.ceil(limit / queries.length)))))
  const merged = uniqueTracks(batches.flat())
  if (merged.length) return merged.slice(0, limit)
  return getCatalogTrending(lang, limit)
}

export async function getCatalogTrending(lang?: string, limit = 20): Promise<AuralTrack[]> {
  const language = queriesForLanguage(lang)
  if (language.length) {
    const tracks = await discoverTracks(language[0], lang, limit)
    if (tracks.length) return tracks.slice(0, limit)
  }
  try {
    const trending = await getTrendingAudiusTracks(limit)
    if (trending.length) return trending
  } catch {
    /* fall through to iTunes */
  }
  return searchItunesTracks(language[0] || 'top songs', limit)
}

export async function getCatalogTrack(id: string): Promise<AuralTrack> {
  if (id.startsWith('itunes:')) return getItunesTrack(id)
  return getAudiusTrack(id)
}

export async function getRelatedTracks(track: AuralTrack, limit = 8): Promise<AuralTrack[]> {
  const query = track.genre || track.artist || track.title
  const related = await discoverTracks(query, undefined, limit + 4)
  return related.filter((item) => item.id !== track.id).slice(0, limit)
}

export async function getCatalogArtist(id: string): Promise<{ artist: AuralArtist; tracks: AuralTrack[] }> {
  if (id.startsWith('itunes:')) {
    const tracks = await getItunesArtistTracks(id, 20)
    const named = tracks[0]
    return {
      artist: {
        id,
        name: named?.artist ?? 'Artist',
        handle: named?.genre ?? null,
        imageUrl: named?.artworkUrl ?? null,
        followerCount: null,
        trackCount: tracks.length,
        provider: 'itunes',
      },
      tracks,
    }
  }
  const [artist, tracks] = await Promise.all([getAudiusArtist(id), getAudiusArtistTracks(id)])
  return { artist, tracks }
}

export async function searchCatalogArtists(query: string, limit = 12): Promise<AuralArtist[]> {
  const [audius, itunes] = await Promise.allSettled([
    searchAudiusArtists(query, limit),
    searchItunesArtists(query, Math.ceil(limit / 2)),
  ])
  const artists = [
    ...(audius.status === 'fulfilled' ? audius.value : []),
    ...(itunes.status === 'fulfilled' ? itunes.value : []),
  ]
  const seen = new Set<string>()
  return artists.filter((artist) => {
    const key = artist.name.toLowerCase()
    if (seen.has(artist.id) || seen.has(key)) return false
    seen.add(artist.id)
    seen.add(key)
    return true
  }).slice(0, limit)
}

export async function getCountryTracks(country: string, limit = 20) {
  const catalog = countryCatalog[country]
  if (!catalog) return null
  const batches = await Promise.all(catalog.queries.map((query) => discoverTracks(query, catalog.lang, 10)))
  return {
    country,
    genres: catalog.genres,
    lang: catalog.lang,
    tracks: uniqueTracks(batches.flat()).slice(0, limit),
  }
}
