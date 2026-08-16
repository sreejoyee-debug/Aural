export type Page =
  | 'Landing'
  | 'Login'
  | 'Signup'
  | 'Home'
  | 'Search'
  | 'Library'
  | 'AI DJ'
  | 'Mood Discovery'
  | 'Music Globe'
  | 'Weather Mix'
  | 'Roulette'
  | 'Travel Playlist'
  | 'Artist Tracker'
  | 'Settings'
  | 'Song Details'
  | 'Profile'

export type Song = {
  title: string
  artist: string
  album: string
  duration: string
  color: string
  art: string
  tags: string[]

  /**
   * Live music API fields.
   * Demo songs can leave these undefined.
   */
  id?: string
  streamUrl?: string
  artUrl?: string
  source?: 'audius' | 'demo'
  permalink?: string
  artistId?: string
  durationSeconds?: number
  genre?: string
}

export const songs: Song[] = [
  {
    id: 'demo-glass-horizon',
    title: 'Glass Horizon',
    artist: 'Luna Vale',
    album: 'Afterimage',
    duration: '3:42',
    color: '#b687ff',
    art: 'violet-orbit',
    tags: ['Dream pop', 'Soft focus'],
    source: 'demo',
  },
  {
    id: 'demo-night-signals',
    title: 'Night Signals',
    artist: 'Sundial Club',
    album: 'Tidal Sleep',
    duration: '4:08',
    color: '#ff7aae',
    art: 'pink-grid',
    tags: ['Indie', 'Late night'],
    source: 'demo',
  },
  {
    id: 'demo-long-way-home',
    title: 'The Long Way Home',
    artist: 'Velvet Coast',
    album: 'Heat Map',
    duration: '3:26',
    color: '#ffbd65',
    art: 'sunset-drive',
    tags: ['Alt pop', 'Warm'],
    source: 'demo',
  },
  {
    id: 'demo-blue-hour',
    title: 'Blue Hour',
    artist: 'Aerial Days',
    album: 'Quiet Satellites',
    duration: '5:14',
    color: '#65d9ff',
    art: 'blue-waves',
    tags: ['Ambient', 'Focus'],
    source: 'demo',
  },
  {
    id: 'demo-new-ritual',
    title: 'New Ritual',
    artist: 'Miro & the Moon',
    album: 'Flowers for the Future',
    duration: '2:57',
    color: '#e6ed78',
    art: 'acid-dots',
    tags: ['Electronic', 'Lift'],
    source: 'demo',
  },
  {
    id: 'demo-satellite-heart',
    title: 'Satellite Heart',
    artist: 'Nao Kline',
    album: 'Open Season',
    duration: '3:51',
    color: '#86efc3',
    art: 'mint-planet',
    tags: ['R&B', 'Tender'],
    source: 'demo',
  },
]

export const moods = [
  {
    label: 'Rainy & Cozy',
    emoji: '🌧',
    color: '#6da8ff',
    note: 'Warm lo-fi, rain textures, open-window jazz',
  },
  {
    label: 'Heartbroken',
    emoji: '💔',
    color: '#f07aa1',
    note: 'Soft alt-pop and the right amount of catharsis',
  },
  {
    label: 'Gym Beast',
    emoji: '💪',
    color: '#ff765c',
    note: 'High-impact electronic, rap and rock',
  },
  {
    label: 'Study Focus',
    emoji: '📚',
    color: '#89c49c',
    note: 'Zero-distraction instrumentals and warm ambience',
  },
  {
    label: 'Sunrise Calm',
    emoji: '🌅',
    color: '#ffc86b',
    note: 'Acoustic light, gentle vocals and room to breathe',
  },
  {
    label: 'Late Night Drive',
    emoji: '🚗',
    color: '#9b83ff',
    note: 'Neon synths, night radio, endless highway',
  },
  {
    label: 'Party',
    emoji: '✨',
    color: '#ff65bd',
    note: 'Bright hooks, club energy and good chaos',
  },
  {
    label: 'Relax',
    emoji: '😌',
    color: '#65d9d5',
    note: 'Slow beats and unhurried melodies',
  },
]

export const navigation: Page[] = [
  'Home',
  'Search',
  'Library',
  'AI DJ',
  'Mood Discovery',
  'Music Globe',
  'Weather Mix',
  'Roulette',
  'Travel Playlist',
  'Artist Tracker',
  'Settings',
]

export const countryData = {
  India: {
    flag: '🇮🇳',
    city: 'Mumbai, India',
    genre: 'Bollywood • Punjabi • Carnatic',
    artists: ['Anuv Jain', 'Prateek Kuhad', 'Shubh'],
    listeners: '42.8M',
  },

  Japan: {
    flag: '🇯🇵',
    city: 'Tokyo, Japan',
    genre: 'City Pop • Anime • Jazz',
    artists: ['Miki Matsubara', 'Fujii Kaze', 'Lamp'],
    listeners: '31.2M',
  },

  Brazil: {
    flag: '🇧🇷',
    city: 'São Paulo, Brazil',
    genre: 'Samba • Bossa Nova • Baile funk',
    artists: ['Anitta', 'Seu Jorge', 'Liniker'],
    listeners: '26.4M',
  },

  Korea: {
    flag: '🇰🇷',
    city: 'Seoul, Korea',
    genre: 'K-pop • R&B • Indie',
    artists: ['DEAN', 'NewJeans', 'wave to earth'],
    listeners: '48.1M',
  },

  Nigeria: {
    flag: '🇳🇬',
    city: 'Lagos, Nigeria',
    genre: 'Afrobeats • Alté • Highlife',
    artists: ['Tems', 'Burna Boy', 'Asake'],
    listeners: '18.6M',
  },
}
