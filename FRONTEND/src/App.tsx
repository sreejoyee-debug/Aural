import { useEffect, useMemo, useRef, useState, type ComponentType } from 'react'
import type { Session } from '@supabase/supabase-js'
import { supabase } from './lib/supabase'
import { addTrackToPlaylist, createPlaylist, getArtist, getGlobeCountry, getLibrary, getMoodRecommendations, getProfile, getRouletteTrack, getTrackedArtists, getTrendingTracks, getTravelPlaylist, getWeatherMix, recordHistory, saveTrack, searchMusic, trackArtist, untrackArtist, type LibraryData, type ProfileData } from './lib/api'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowUpRight,
  Bell,
  ChevronRight,
  CloudSun,
  Compass,
  Dices,
  Globe2,
  Heart,
  HeartHandshake,
  Home,
  LibraryBig,
  ListMusic,
  Map,
  Mic2,
  MoonStar,
  MoreHorizontal,
  Music2,
  Pause,
  Play,
  Radio,
  Search,
  SendHorizontal,
  Settings,
  Shuffle,
  SkipBack,
  SkipForward,
  Sparkles,
  Star,
  Volume2,
  Waves,
  type LucideProps,
} from 'lucide-react'
import { GradientButton } from './components/ui/gradient-button'
import { GlowCard } from './components/ui/spotlight-card'
import { countryData, moods, navigation, songs, type Page, type Song } from './data'

type Icon = ComponentType<LucideProps>

type PrivatePage = Exclude<Page, 'Landing' | 'Login' | 'Signup' | 'Song Details' | 'Profile'>

const navIcons: Record<PrivatePage, Icon> = {
  Home,
  Search,
  Library: LibraryBig,
  'AI DJ': Radio,
  'Mood Discovery': HeartHandshake,
  'Music Globe': Globe2,
  'Weather Mix': CloudSun,
  Roulette: Dices,
  'Travel Playlist': Map,
  'Artist Tracker': Compass,
  Settings,
}

const pageDescriptions: Record<Page, string> = {
  Landing: 'Hear beyond.',
  Login: 'Welcome back.',
  Signup: 'Your sound map starts here.',
  Home: 'Your sound, tuned to this moment.',
  Search: 'Search artists, songs, moods and worlds.',
  Library: 'A home for all the music you keep close.',
  'AI DJ': 'Talk it out. Your next soundtrack is listening.',
  'Mood Discovery': 'Start with a feeling. We’ll find the music.',
  'Music Globe': 'Follow sound as it travels across the planet.',
  'Weather Mix': 'A mix written by the sky outside.',
  Roulette: 'One tap. An entirely new corner of music.',
  'Travel Playlist': 'Build a route, then give it a score.',
  'Artist Tracker': 'The next names you will be glad you found early.',
  Settings: 'Make AURAL feel exactly like yours.',
  'Song Details': 'The story, texture and meaning beneath the song.',
  Profile: 'Your listening life, in living colour.',
}

function Artwork({ song, compact = false }: { song: Song; compact?: boolean }) {
  return <div className={`artwork art-${song.art} ${compact ? 'artwork-compact' : ''}`} style={song.artUrl ? { backgroundImage: `linear-gradient(135deg, rgba(18, 10, 39, .16), rgba(18, 10, 39, .35)), url("${song.artUrl}")` } : undefined} aria-label={`${song.album} artwork`} role="img"><span /></div>
}

function Equalizer({ active = true }: { active?: boolean }) {
  return <div className={`equalizer ${active ? 'is-active' : ''}`} aria-label="Now playing"><i /><i /><i /><i /></div>
}

function Heading({ eyebrow, title, action }: { eyebrow?: string; title: string; action?: React.ReactNode }) {
  return <div className="section-heading">
    <div>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
    </div>
    {action}
  </div>
}

function TrackRow({ song, index, onOpen, onPlay, onSave }: { song: Song; index: number; onOpen: () => void; onPlay: () => void; onSave?: () => void }) {
  return (
    <div className="track-row">
      <span className="track-number">{String(index + 1).padStart(2, '0')}</span>
      <button className="track-art-button" onClick={onPlay} aria-label={`Play ${song.title}`}><Artwork song={song} compact /></button>
      <button className="track-copy" onClick={onOpen}>
        <strong>{song.title}</strong><span>{song.artist} <b>•</b> {song.album}</span>
      </button>
      <div className="track-tags">{song.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      {onSave ? <button className="icon-button subtle" onClick={onSave} aria-label={`Save ${song.title}`}><Heart size={18} /></button> : <button className="icon-button subtle" aria-label={`More options for ${song.title}`}><MoreHorizontal size={18} /></button>}
      <span className="track-duration">{song.duration}</span>
    </div>
  )
}

function App() {
  const [page, setPage] = useState<Page>('Landing')
  const [session, setSession] = useState<Session | null>(null)
  const [authReady, setAuthReady] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [selectedSong, setSelectedSong] = useState<Song | null>(null)
  const [homeTracks, setHomeTracks] = useState<Song[]>([])
  const [homeStatus, setHomeStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  const [moodTracks, setMoodTracks] = useState<Song[]>([])
  const [featureStatus, setFeatureStatus] = useState<string | null>(null)
  const [rouletteSong, setRouletteSong] = useState<Song | null>(null)
  const [weatherTracks, setWeatherTracks] = useState<Song[]>([])
  const [weatherSummary, setWeatherSummary] = useState<string | null>(null)
  const [travelTracks, setTravelTracks] = useState<Song[]>([])
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.8)
  const [playerError, setPlayerError] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [selectedMood, setSelectedMood] = useState(moods[5])
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState<Song[] | null>(null)
  const [searchStatus, setSearchStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [selectedCountry, setSelectedCountry] = useState<keyof typeof countryData>('India')
  const [roulette, setRoulette] = useState({ spinning: false, result: 'Korean city pop for a violet 2AM' })
  const [travel, setTravel] = useState('Night Drive')
  const [hours, setHours] = useState(4)
  const [chat, setChat] = useState([
    { from: 'dj', text: 'You feel like you need a fresh start. I made room for glowing guitars, weightless synths, and a little brave energy.' },
    { from: 'you', text: 'I want something like Arctic Monkeys, but calmer.' },
    { from: 'dj', text: 'Perfect. I queued velvet indie, slow-burn bass, and a few songs that feel like driving with the windows down.' },
  ])
  const [message, setMessage] = useState('')
  const [notice, setNotice] = useState<string | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      if (data.session) setPage('Home')
      setAuthReady(true)
    })
    const { data: listener } = supabase.auth.onAuthStateChange((event, nextSession) => {
      setSession(nextSession)
      if (event === 'SIGNED_IN' && nextSession) setPage('Home')
    })
    return () => listener.subscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (authReady && !session && !['Landing', 'Login', 'Signup'].includes(page)) setPage('Login')
  }, [authReady, page, session])

  const visibleSongs = useMemo(() => {
    const query = search.trim().toLowerCase()
    if (!query) return songs
    return songs.filter((song) => `${song.title} ${song.artist} ${song.album} ${song.tags.join(' ')}`.toLowerCase().includes(query))
  }, [search])

  useEffect(() => {
    const controller = new AbortController()
    getTrendingTracks(controller.signal)
      .then((tracks) => { setHomeTracks(tracks); setSelectedSong((current) => current ?? tracks[0] ?? null); setHomeStatus('ready') })
      .catch(() => setHomeStatus('error'))
    return () => controller.abort()
  }, [])

  useEffect(() => {
    if (!selectedSong?.streamUrl || !audioRef.current) return
    const audio = audioRef.current
    audio.src = selectedSong.streamUrl
    audio.volume = volume
    setCurrentTime(0)
    setDuration(selectedSong.durationSeconds ?? 0)
    setPlayerError(null)
    if (playing) audio.play().catch(() => { setPlaying(false); setPlayerError('This track could not be played.') })
    void recordHistory(selectedSong).catch(() => undefined)
  }, [selectedSong])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = volume
    if (playing) audio.play().catch(() => { setPlaying(false); setPlayerError('Playback was blocked. Press play to continue.') })
    else audio.pause()
  }, [playing, volume])

  useEffect(() => {
    const query = search.trim()
    if (!query) {
      setSearchResults(null)
      setSearchStatus('idle')
      return
    }

    const controller = new AbortController()
    setSearchStatus('loading')
    const timeout = window.setTimeout(() => {
      searchMusic(query, controller.signal)
        .then((tracks) => {
          setSearchResults(tracks)
          setSearchStatus('idle')
        })
        .catch((error: unknown) => {
          if (error instanceof DOMException && error.name === 'AbortError') return
          setSearchResults(null)
          setSearchStatus('error')
        })
    }, 300)

    return () => {
      controller.abort()
      window.clearTimeout(timeout)
    }
  }, [search])

  const openSong = (song: Song) => {
    setSelectedSong(song)
    setPage('Song Details')
  }

  const playSong = (song: Song) => {
    setSelectedSong(song)
    setPlaying(true)
    setNotice(`Now playing ${song.title}`)
    window.setTimeout(() => setNotice(null), 2200)
  }

  const saveSong = (song: Song) => {
    if (!session) {
      setNotice('Log in to save music to your library.')
      setPage('Login')
      return
    }
    void saveTrack(song)
      .then(() => setNotice(`${song.title} saved to your library.`))
      .catch((error: unknown) => setNotice(error instanceof Error ? error.message : 'Unable to save this track.'))
  }

  const signOut = () => {
    void supabase.auth.signOut().then(() => {
      setPage('Landing')
      setNotice('You have been signed out.')
    })
  }

  const followArtist = (song: Song) => {
    if (!song.artistId) return setNotice('Artist tracking is available for live Audius tracks.')
    void trackArtist({ id: song.artistId, name: song.artist })
      .then(() => setNotice(`${song.artist} added to your artist tracker.`))
      .catch((error: unknown) => setNotice(error instanceof Error ? error.message : 'Unable to track this artist.'))
  }

  const chooseMood = (mood: typeof moods[number]) => {
    setSelectedMood(mood)
    setFeatureStatus('Finding real tracks for this mood…')
    getMoodRecommendations(mood.label)
      .then((tracks) => { setMoodTracks(tracks); setFeatureStatus(null) })
      .catch(() => setFeatureStatus('Unable to load this mood mix. Please try again.'))
    setNotice(`${mood.label} palette activated`)
    window.setTimeout(() => setNotice(null), 2200)
  }

  const sendMessage = () => {
    const cleaned = message.trim()
    if (!cleaned) return
    setChat((current) => [...current, { from: 'you', text: cleaned }])
    setMessage('')
    setChat((current) => [...current, { from: 'dj', text: 'AI DJ is coming soon. Explore Mood Discovery, Weather Mix, or Roulette in the meantime.' }])
  }

  const spinRoulette = () => {
    if (roulette.spinning) return
    setRoulette((state) => ({ ...state, spinning: true }))
    getRouletteTrack()
      .then(({ track, route }) => { setRouletteSong(track); setRoulette({ spinning: false, result: route }) })
      .catch(() => { setRoulette((state) => ({ ...state, spinning: false })); setFeatureStatus('Unable to find a Roulette track. Please try again.') })
  }

  if (!authReady) return null

  if (page === 'Landing' || page === 'Login' || page === 'Signup') {
    return <PublicView page={page} onPage={setPage} />
  }

  if (!session) return <PublicView page="Login" onPage={setPage} />

  return (
    <main className="app-shell" style={{ '--mood-color': selectedMood.color } as React.CSSProperties}>
      <div className="noise" />
      <div className="aurora aurora-one" /><div className="aurora aurora-two" /><div className="stars" />

      <aside className="sidebar">
        <button className="brand" onClick={() => setPage('Home')} aria-label="Aural home"><span className="brand-mark"><Waves size={21} /></span><span>AURAL</span></button>
        <p className="nav-caption">DISCOVER</p>
        <nav>
          {navigation.slice(0, 6).map((item) => {
            const NavIcon = navIcons[item as PrivatePage]
            return <button key={item} onClick={() => setPage(item)} className={page === item ? 'nav-item active' : 'nav-item'}><NavIcon size={18} /><span>{item}</span>{item === 'AI DJ' && <i className="new-dot" />}</button>
          })}
        </nav>
        <p className="nav-caption nav-caption-space">MAKE IT YOURS</p>
        <nav>
          {navigation.slice(6).map((item) => {
            const NavIcon = navIcons[item as PrivatePage]
            return <button key={item} onClick={() => setPage(item)} className={page === item ? 'nav-item active' : 'nav-item'}><NavIcon size={18} /><span>{item}</span></button>
          })}
        </nav>
          <div className="sidebar-bottom">
          <button className="profile-summary" onClick={() => setPage('Profile')}><span className="avatar avatar-small">{session.user.email?.slice(0, 2).toUpperCase() ?? 'AU'}</span><span><strong>{session.user.user_metadata.name ?? session.user.email?.split('@')[0] ?? 'Listener'}</strong><small>Your AURAL library</small></span><ChevronRight size={16} /></button>
          {selectedSong && <div className="tiny-player"><button onClick={() => setPlaying(!playing)} aria-label="Toggle mini player">{playing ? <Pause size={14} /> : <Play size={14} fill="currentColor" />}</button><span><b>{selectedSong.title}</b><small>{selectedSong.artist}</small></span><Equalizer active={playing} /></div>}
        </div>
      </aside>

      <section className="main-area">
        <header className="topbar">
          <div className="mobile-brand"><span className="brand-mark"><Waves size={18} /></span>AURAL</div>
          <label className="global-search"><Search size={17} /><input value={search} onChange={(event) => { setSearch(event.target.value); if (event.target.value) setPage('Search') }} placeholder="Search your next feeling" /><kbd>⌘ K</kbd></label>
          <div className="top-actions"><button className="icon-button" aria-label="Notifications"><Bell size={18} /><i /></button><button className="avatar" onClick={() => setPage('Profile')} aria-label="Open your profile">SK</button></div>
        </header>

        <AnimatePresence mode="wait">
          <motion.div key={page} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.28 }} className="page-content">
            {page === 'Home' && <HomeView tracks={homeTracks} status={homeStatus} onPage={setPage} onPlay={playSong} onOpen={openSong} selectedMood={selectedMood} onMood={chooseMood} />}
            {page === 'Search' && <SearchView query={search} songs={searchResults ?? visibleSongs} loading={searchStatus === 'loading'} unavailable={searchStatus === 'error'} onOpen={openSong} onPlay={playSong} />}
            {page === 'Library' && <LibraryView onOpen={openSong} onPlay={playSong} onSave={saveSong} />}
            {page === 'AI DJ' && <DjView chat={chat} message={message} setMessage={setMessage} onSend={sendMessage} onPlay={playSong} />}
            {page === 'Mood Discovery' && <MoodView tracks={moodTracks} status={featureStatus} selectedMood={selectedMood} onMood={chooseMood} onPlay={playSong} />}
            {page === 'Music Globe' && <GlobeView selected={selectedCountry} setSelected={setSelectedCountry} onPlay={playSong} onOpen={openSong} />}
            {page === 'Weather Mix' && <WeatherView tracks={weatherTracks} summary={weatherSummary} setTracks={setWeatherTracks} setSummary={setWeatherSummary} onPlay={playSong} />}
            {page === 'Roulette' && <RouletteView song={rouletteSong} roulette={roulette} onSpin={spinRoulette} onPlay={playSong} />}
            {page === 'Travel Playlist' && <TravelView tracks={travelTracks} setTracks={setTravelTracks} travel={travel} setTravel={setTravel} hours={hours} setHours={setHours} onPlay={playSong} />}
            {page === 'Artist Tracker' && <ArtistView onPlay={playSong} />}
            {page === 'Settings' && <SettingsView />}
            {page === 'Song Details' && selectedSong && <SongView song={selectedSong} onBack={() => setPage('Home')} onPlay={() => setPlaying(!playing)} onSave={() => saveSong(selectedSong)} onTrackArtist={() => followArtist(selectedSong)} />}
            {page === 'Profile' && <ProfileView onPage={setPage} onSignOut={signOut} />}
          </motion.div>
        </AnimatePresence>
      </section>

      <nav className="mobile-nav">
        {(['Home', 'Search', 'AI DJ', 'Library'] as Page[]).map((item) => {
          const NavIcon = navIcons[item as PrivatePage]
          return <button key={item} className={page === item ? 'active' : ''} onClick={() => setPage(item)}><NavIcon size={19} /><span>{item === 'AI DJ' ? 'DJ' : item}</span></button>
        })}
      </nav>

      {selectedSong && <footer className="player-bar"><audio ref={audioRef} onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)} onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)} onEnded={() => { const index = homeTracks.findIndex((song) => song.id === selectedSong.id); const next = homeTracks[(index + 1) % homeTracks.length]; if (next) playSong(next) }} onError={() => setPlayerError('This track could not be played.')} /><div className="player-track"><Artwork song={selectedSong} compact /><div><strong>{selectedSong.title}</strong><span>{selectedSong.artist}</span></div><button className="like-button"><Heart size={17} /></button></div><div className="player-center"><div className="player-controls"><button aria-label="Shuffle"><Shuffle size={16} /></button><button aria-label="Previous" onClick={() => { const index = homeTracks.findIndex((song) => song.id === selectedSong.id); const previous = homeTracks[(index - 1 + homeTracks.length) % homeTracks.length]; if (previous) playSong(previous) }}><SkipBack size={18} fill="currentColor" /></button><button className="play-circle" onClick={() => setPlaying(!playing)} aria-label="Play or pause">{playing ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}</button><button aria-label="Next" onClick={() => { const index = homeTracks.findIndex((song) => song.id === selectedSong.id); const next = homeTracks[(index + 1) % homeTracks.length]; if (next) playSong(next) }}><SkipForward size={18} fill="currentColor" /></button><button aria-label="Repeat"><RotateIcon /></button></div><div className="progress-row"><span>{Math.floor(currentTime / 60)}:{String(Math.floor(currentTime % 60)).padStart(2, '0')}</span><input className="progress" type="range" min="0" max={Number.isFinite(duration) ? duration : 0} value={Math.min(currentTime, duration || 0)} onChange={(event) => { const time = Number(event.target.value); if (audioRef.current) audioRef.current.currentTime = time; setCurrentTime(time) }} /><span>{selectedSong.duration}</span></div></div><div className="player-tools"><button title="Lyrics"><Music2 size={17} /></button><button title="Story"><Sparkles size={17} /></button><button title="Queue"><ListMusic size={17} /></button><button title="Mute" onClick={() => setVolume(volume ? 0 : .8)}><Volume2 size={17} /></button><input className="volume" type="range" min="0" max="1" step=".01" value={volume} onChange={(event) => setVolume(Number(event.target.value))} /></div>{playerError && <span className="player-error">{playerError}</span>}</footer>}
      <AnimatePresence>{notice && <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }} className="toast"><Sparkles size={15} />{notice}</motion.div>}</AnimatePresence>
    </main>
  )
}

function RotateIcon() { return <span className="repeat-icon">↻</span> }

function LandingHeadphones() {
  return (
    <div className="landing-headphones headset-3d" aria-label="Dimensional violet headphones" role="img">
      <div className="headset-aura" />
      <div className="headset-shadow" />
      <div className="headset-band"><i /><b /></div>
      <div className="headset-hinge hinge-left" /><div className="headset-hinge hinge-right" />
      <div className="headset-cup cup-left"><i /><b /><span /></div>
      <div className="headset-cup cup-right"><i /><b /><span /></div>
      <div className="headset-ring ring-one" /><div className="headset-ring ring-two" />
      <span className="headset-spark spark-a">✦</span><span className="headset-spark spark-b">✦</span>
    </div>
  )
}

function PublicView({ page, onPage }: { page: 'Landing' | 'Login' | 'Signup'; onPage: (page: Page) => void }) {
  if (page === 'Landing') {
    return <main className="public-shell"><div className="public-grid" /><div className="public-aurora public-aurora-one" /><div className="public-aurora public-aurora-two" /><header className="public-nav"><button className="brand" onClick={() => onPage('Landing')}><span className="brand-mark"><Waves size={21} /></span><span>AURAL</span></button><div><button className="public-login" onClick={() => onPage('Login')}>Log in</button><GradientButton onClick={() => onPage('Signup')}>Start listening <ArrowUpRight size={15} /></GradientButton></div></header><section className="public-hero"><p className="eyebrow">HEAR BEYOND <span>✦</span> THE OBVIOUS</p><h1>Music that<br /><em>understands</em> you.</h1><p>Discover songs through your mood, colour, weather, conversations, and the world moving around you.</p><div><GradientButton onClick={() => onPage('Signup')}><Play size={16} fill="currentColor" /> Find your sound</GradientButton><button className="public-text-button" onClick={() => onPage('Login')}>I already have an account <ChevronRight size={15} /></button></div><div className="public-proof"><span><b>14.8k</b> songs discovered today</span><span><b>86</b> countries in your sound map</span></div></section><LandingHeadphones /><section className="public-features"><article><span>01</span><Sparkles size={17} /><h2>Start with a feeling.</h2><p>Let a mood set the palette, tempo, and next track.</p></article><article><span>02</span><Globe2 size={17} /><h2>Go farther than familiar.</h2><p>Follow a local signal across the music globe.</p></article><article><span>03</span><Radio size={17} /><h2>Talk to the DJ.</h2><p>Describe the moment and receive a listening path.</p></article></section><footer className="public-footer"><span>© 2026 AURAL</span><span>MADE FOR THE MOMENT BETWEEN MOMENTS</span><span>LISTEN WITH INTENTION</span></footer></main>
  }

  const isSignup = page === 'Signup'
  const [googleLoading, setGoogleLoading] = useState(false)
  const signInWithGoogle = async () => {
    setGoogleLoading(true)
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/` },
    })
    if (error) {
      setGoogleLoading(false)
      alert(error.message)
    }
  }
  return <main className="auth-shell"><button className="brand auth-brand" onClick={() => onPage('Landing')}><span className="brand-mark"><Waves size={21} /></span><span>AURAL</span></button><div className="auth-aurora" /><section className="auth-card"><button className="auth-back" onClick={() => onPage('Landing')}><ChevronRight size={15} /> Back</button><p className="eyebrow">{isSignup ? 'YOUR SOUND MAP STARTS HERE' : 'WELCOME BACK TO AURAL'}</p><h1>{isSignup ? <>Hear<br /><em>beyond.</em></> : <>Good to have<br /><em>you back.</em></>}</h1><p className="auth-copy">{isSignup ? 'A few details and we’ll start learning the music that moves with you.' : 'Your late-night drives, tiny rituals, and new discoveries are waiting.'}</p><form
  onSubmit={async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const password = String(formData.get('password') ?? '')

    if (isSignup) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
          },
        },
      })

      if (error) {
        alert(error.message)
        return
      }

      if (!data.session) {
        alert('Account created. Please check your email to confirm your account.')
        onPage('Login')
        return
      }

      onPage('Home')
      return
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      alert(error.message)
      return
    }

    onPage('Home')
  }}
>
  {isSignup && (
    <label>
      Name
      <input
        required
        name="name"
        type="text"
        placeholder="What should we call you?"
      />
    </label>
  )}

  <label>
    Email
    <input
      required
      name="email"
      type="email"
      placeholder="you@example.com"
    />
  </label>

  <label>
    Password
    <input
      required
      name="password"
      type="password"
      placeholder="••••••••"
      minLength={6}
    />
  </label>

  <GradientButton type="submit" className="auth-submit">
    {isSignup ? 'Create my AURAL' : 'Enter AURAL'}
    <ArrowUpRight size={15} />
  </GradientButton>
</form><div className="auth-divider"><span />or continue with<span /></div><button className="social-auth" type="button" onClick={() => void signInWithGoogle()} disabled={googleLoading}>G <span>{googleLoading ? 'Opening Google…' : 'Continue with Google'}</span></button><p className="auth-switch">{isSignup ? 'Already listening?' : 'New to AURAL?'} <button onClick={() => onPage(isSignup ? 'Login' : 'Signup')}>{isSignup ? 'Log in' : 'Create your account'}</button></p></section><div className="auth-art"><div className="auth-disc"><span>✦</span></div><p>YOUR NEXT<br />FAVOURITE IS<br />CLOSER THAN<br />YOU THINK.</p><i>01 / 03</i></div></main>
}

function HomeView({ tracks, status, onPage, onPlay, onOpen, selectedMood, onMood }: { tracks: Song[]; status: 'loading' | 'ready' | 'error'; onPage: (page: Page) => void; onPlay: (song: Song) => void; onOpen: (song: Song) => void; selectedMood: typeof moods[number]; onMood: (mood: typeof moods[number]) => void }) {
  return <>
    <section className="hero-grid">
      <div className="hero-copy">
        <motion.p className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>SUNDAY, 09 AUGUST <span>•</span> 8:41 PM</motion.p>
        <h1>Music that<br /><em>understands</em> you.</h1>
        <p className="hero-lede">AURAL maps your moments to the music that belongs there — through mood, colour, weather, conversation, and the world.</p>
        <div className="hero-actions"><GradientButton onClick={() => onPage('Mood Discovery')}><Play size={17} fill="currentColor" /> Start listening</GradientButton><button className="text-button" onClick={() => onPage('AI DJ')}>Talk to your DJ <ArrowUpRight size={16} /></button></div>
        <div className="hero-social"><span><b>14.8k</b> tracks discovered</span><span><b>86</b> countries explored</span></div>
      </div>
      <GlowCard customSize glowColor="purple" className="hero-visual"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="hero-disc"><div className="disc-label">AURAL<br /><small>HEAR BEYOND</small></div></div><div className="hero-float-note note-one">✦</div><div className="hero-float-note note-two">♪</div><div className="hero-visual-copy"><span>YOUR SOUND MAP</span><strong>Late Night<br />Drive</strong><button onClick={() => onPage('Mood Discovery')}>Explore mood <ChevronRight size={14} /></button></div></GlowCard>
    </section>
    <section className="mini-stats"><div><span className="stat-icon violet"><MoonStar size={17} /></span><p><b>Live discovery</b><small>Fresh tracks from Audius</small></p><strong>{tracks.length || '—'}</strong></div><div><span className="stat-icon yellow"><Star size={17} /></span><p><b>Your next signal</b><small>{tracks[0] ? `${tracks[0].title} by ${tracks[0].artist}` : 'Finding a track…'}</small></p>{tracks[0] && <button onClick={() => onPlay(tracks[0])}><Play size={15} fill="currentColor" /></button>}</div><div><span className="stat-icon blue"><Globe2 size={17} /></span><p><b>Sound passport</b><small>Explore a local music signal</small></p><button onClick={() => onPage('Music Globe')}><ArrowUpRight size={16} /></button></div></section>
    <section className="section-block"><Heading eyebrow="TRENDING ON AUDIUS" title="Made for your current orbit" action={<button className="text-button" onClick={() => onPage('Library')}>See all <ChevronRight size={16} /></button>} />{status === 'loading' ? <div className="empty-state"><Sparkles size={24} /><h3>Finding music…</h3></div> : status === 'error' ? <div className="empty-state"><Sparkles size={24} /><h3>Unable to load trending music. Please refresh.</h3></div> : <div className="playlist-rail">{tracks.slice(0, 4).map((song, index) => <motion.article whileHover={{ y: -6 }} key={song.id} className="album-card"><Artwork song={song} /><button className="album-play" onClick={() => onPlay(song)} aria-label={`Play ${song.title}`}><Play size={16} fill="currentColor" /></button><span className="album-number">0{index + 1}</span><h3>{song.title}</h3><p>{song.artist}</p></motion.article>)}</div>}</section>
    <section className="split-section"><div className="mood-module"><Heading eyebrow="MOOD RADIO" title={`Feeling ${selectedMood.label.toLowerCase()}?`} action={<button className="text-button" onClick={() => onPage('Mood Discovery')}>Open moods <ChevronRight size={16} /></button>} /><div className="mood-strip">{moods.slice(0, 5).map((mood) => <button onClick={() => onMood(mood)} className={selectedMood.label === mood.label ? 'mood-chip chosen' : 'mood-chip'} style={{ '--chip': mood.color } as React.CSSProperties} key={mood.label}><span>{mood.emoji}</span>{mood.label}</button>)}</div><div className="mood-now"><div className="mood-pulse" /><p><span>NOW TRANSMITTING</span><b>{selectedMood.note}</b></p>{tracks[0] && <button onClick={() => onPlay(tracks[0])}><Play size={17} fill="currentColor" /></button>}</div></div><GlowCard customSize glowColor="blue" className="humming-card"><Mic2 size={20} /><p className="eyebrow">HUM TO FIND</p><h3>A melody on<br />the tip of your tongue?</h3><p>Sing, hum, or whistle. We’ll listen for the shape of it.</p><button className="humming-cta"><span className="mini-wave"><i /><i /><i /><i /><i /></span> Start humming</button></GlowCard></section>
    <section className="section-block track-list-section"><Heading eyebrow="YOUR CONTINUATION" title="Keep the night moving" />{tracks.length ? <div className="track-list">{tracks.slice(0, 4).map((song, index) => <TrackRow key={song.id} song={song} index={index} onOpen={() => onOpen(song)} onPlay={() => onPlay(song)} />)}</div> : <div className="empty-state"><Sparkles size={24} /><h3>No tracks available yet.</h3></div>}</section>
  </>
}

function SearchView({ query, songs: foundSongs, loading, unavailable, onOpen, onPlay }: { query: string; songs: Song[]; loading: boolean; unavailable: boolean; onOpen: (song: Song) => void; onPlay: (song: Song) => void }) {
  const suggestions = ['midnight rain', 'coding music', 'nostalgic', 'Tokyo', 'violet']
  return <><div className="page-intro"><p className="eyebrow">DISCOVER WITHOUT BOUNDARIES</p><h1>What are you looking<br />to <em>feel?</em></h1><p>{pageDescriptions.Search}</p></div><div className="search-hero"><Search size={20} /><input autoFocus value={query} placeholder="Try “rainy indie from Seoul”" readOnly /><button><Mic2 size={18} /></button></div><div className="search-chips">{suggestions.map((item) => <button key={item}>⌁ {item}</button>)}</div><section className="search-results"><Heading title={query ? `Results for “${query}”` : 'A few places to begin'} />{loading ? <div className="empty-state"><Sparkles size={24} /><h3>Searching the AURAL signal…</h3></div> : foundSongs.length ? <div className="track-list">{foundSongs.map((song, index) => <TrackRow key={song.id} song={song} index={index} onOpen={() => onOpen(song)} onPlay={() => onPlay(song)} />)}</div> : <div className="empty-state"><Sparkles size={24} /><h3>{unavailable ? 'Live search is temporarily unavailable.' : 'No exact matches — but you just made a great prompt.'}</h3><p>Ask AI DJ to make it more emotional, geographic, nostalgic, or specific.</p></div>}</section></>
}

function LibraryView({ onOpen, onPlay, onSave }: { onOpen: (song: Song) => void; onPlay: (song: Song) => void; onSave: (song: Song) => void }) {
  const [library, setLibrary] = useState<LibraryData | null>(null)
  const [status, setStatus] = useState<'loading' | 'error' | 'ready'>('loading')
  const [tab, setTab] = useState<'playlists' | 'favorites' | 'history'>('playlists')

  useEffect(() => {
    let active = true
    getLibrary().then((data) => { if (active) { setLibrary(data); setStatus('ready') } }).catch(() => { if (active) setStatus('error') })
    return () => { active = false }
  }, [])

  const tracks = tab === 'favorites' ? library?.favorites ?? [] : library?.history ?? []
  return <><div className="page-intro compact-intro"><p className="eyebrow">YOUR COLLECTION</p><h1>Library</h1><p>Everything you’ve saved, made, and found along the way.</p></div><section className="library-tabs"><button className={tab === 'playlists' ? 'active' : ''} onClick={() => setTab('playlists')}>Playlists</button><button className={tab === 'favorites' ? 'active' : ''} onClick={() => setTab('favorites')}>Liked songs</button><button className={tab === 'history' ? 'active' : ''} onClick={() => setTab('history')}>Recently played</button></section>{status === 'loading' && <div className="empty-state"><Sparkles size={24} /><h3>Loading your library…</h3></div>}{status === 'error' && <div className="empty-state"><Sparkles size={24} /><h3>We couldn’t load your library.</h3><p>Check that the API and database are running, then try again.</p></div>}{status === 'ready' && tab === 'playlists' && <div className="library-grid">{library?.playlists.length ? library.playlists.map((playlist, index) => <article key={playlist.id} className="library-tile"><div className={`artwork art-${songs[index % songs.length].art}`}><span /></div><div><span className="tile-kicker">{playlist.description || 'AURAL PLAYLIST'}</span><h3>{playlist.title}</h3><p>{playlist._count.tracks} songs</p></div></article>) : <div className="empty-state"><h3>No playlists yet.</h3><p>Your first saved playlist will appear here.</p></div>}</div>}{status === 'ready' && tab !== 'playlists' && <section className="section-block"><Heading title={tab === 'favorites' ? 'Liked songs' : 'Recently played'} />{tracks.length ? <div className="track-list">{tracks.map((song, index) => <TrackRow key={`${song.id}-${index}`} song={song} index={index} onOpen={() => onOpen(song)} onPlay={() => onPlay(song)} onSave={tab === 'history' ? () => onSave(song) : undefined} />)}</div> : <div className="empty-state"><h3>{tab === 'favorites' ? 'No liked songs yet.' : 'Nothing played yet.'}</h3><p>{tab === 'favorites' ? 'Use the heart button on any track to save it here.' : 'Play a track and it will appear in your listening history.'}</p></div>}</section>}</>
}

function DjView({ chat, message, setMessage, onSend, onPlay }: { chat: { from: string; text: string }[]; message: string; setMessage: (text: string) => void; onSend: () => void; onPlay: (song: Song) => void }) {
  return <div className="dj-layout"><section className="dj-chat"><div className="page-intro compact-intro"><p className="eyebrow">AURAL INTELLIGENCE</p><h1>Your <em>AI DJ</em></h1><p>Tell me about the moment. I’ll read between the lines.</p></div><div className="dj-persona"><div className="dj-orb"><span>✦</span></div><div><b>Nova, your AURAL DJ</b><p>Listening for context, not just keywords.</p></div><span className="online">Live</span></div><div className="conversation">{chat.map((entry, index) => <motion.div initial={{ opacity: 0, x: entry.from === 'you' ? 12 : -12 }} animate={{ opacity: 1, x: 0 }} key={`${entry.text}-${index}`} className={`message ${entry.from}`}><span>{entry.from === 'dj' ? 'N' : 'S'}</span><p>{entry.text}</p></motion.div>)}</div><div className="prompt-suggestions"><button onClick={() => setMessage('I just finished my exams.')}>“I just finished my exams.”</button><button onClick={() => setMessage('I need a soundtrack for coding.')}>“I need coding music.”</button></div><div className="chat-compose"><input value={message} onChange={(event) => setMessage(event.target.value)} onKeyDown={(event) => event.key === 'Enter' && onSend()} placeholder="Tell Nova what’s on your mind…" /><button onClick={onSend} aria-label="Send message"><SendHorizontal size={18} /></button></div></section><aside className="dj-queue"><p className="eyebrow">NOVA’S RESPONSE</p><h2>Soft landing<br />for a loud day.</h2><p>Indie rock lowered to a whisper, dreamy basslines, and one bright song for the turn home.</p><div className="dj-cover"><Artwork song={songs[0]} /><span>47 min<br /><small>6 tracks</small></span></div><button className="queue-play" onClick={() => onPlay(songs[0])}><Play size={16} fill="currentColor" /> Play the set</button><div className="queue-why"><Sparkles size={16} /><span><b>Why this works</b> You asked for familiar guitars without the rush, so tempo stays below 110 BPM.</span></div></aside></div>
}

function MoodView({ tracks, status, selectedMood, onMood, onPlay }: { tracks: Song[]; status: string | null; selectedMood: typeof moods[number]; onMood: (mood: typeof moods[number]) => void; onPlay: (song: Song) => void }) {
  return <><div className="page-intro"><p className="eyebrow">EMOTION-LED DISCOVERY</p><h1>Pick a feeling.<br /><em>Find its sound.</em></h1><p>Choosing a mood recalibrates AURAL’s palette, recommendations, and the energy of the room.</p></div><div className="mood-wall">{moods.map((mood, index) => <motion.button layout onClick={() => onMood(mood)} className={selectedMood.label === mood.label ? 'mood-card selected' : 'mood-card'} style={{ '--mood': mood.color } as React.CSSProperties} key={mood.label} whileHover={{ y: -5 }}><span>{mood.emoji}</span><strong>{mood.label}</strong><small>{mood.note}</small><i>0{index + 1}</i></motion.button>)}</div><section className="mood-reveal"><div><span className="eyebrow">YOUR {selectedMood.label.toUpperCase()} MIX</span><h2>New music<br />for this exact shade.</h2><p>{status || `${selectedMood.note}. Choose a mood to receive live Audius recommendations.`}</p>{tracks[0] && <GradientButton onClick={() => onPlay(tracks[0])}><Play size={16} fill="currentColor" /> Play your mix</GradientButton>}<div className="track-list">{tracks.slice(0, 3).map((song, index) => <TrackRow key={song.id} song={song} index={index} onOpen={() => undefined} onPlay={() => onPlay(song)} />)}</div></div>{tracks[0] && <div className="mood-reveal-art"><Artwork song={tracks[0]} />{tracks[1] && <Artwork song={tracks[1]} compact />}<div className="mood-wave"><i /><i /><i /><i /><i /><i /><i /></div></div>}</section></>
}

function GlobeView({ selected, setSelected, onPlay, onOpen }: { selected: keyof typeof countryData; setSelected: (country: keyof typeof countryData) => void; onPlay: (song: Song) => void; onOpen: (song: Song) => void }) {
  const country = countryData[selected]
  const [tracks, setTracks] = useState<Song[]>([])
  const [status, setStatus] = useState<'loading' | 'error' | 'ready'>('loading')
  useEffect(() => {
    let active = true
    setStatus('loading')
    getGlobeCountry(selected).then((data) => { if (active) { setTracks(data.tracks); setStatus('ready') } }).catch(() => { if (active) setStatus('error') })
    return () => { active = false }
  }, [selected])
  return <><div className="page-intro compact-intro"><p className="eyebrow">SOUND HAS NO BORDERS</p><h1>Music <em>Globe</em></h1><p>Spin the planet, find a local signal, and listen further than your algorithm usually travels.</p></div><section className="globe-layout"><div className="globe-stage"><div className="globe-glow" /><div className="globe-orbit orbit-a" /><div className="globe-orbit orbit-b" /><div className="globe"><div className="globe-continent continent-a" /><div className="globe-continent continent-b" /><div className="globe-lines" /><span className="globe-pin pin-india">✦</span><span className="globe-pin pin-japan">✦</span><span className="globe-pin pin-brazil">✦</span></div><p>SELECT A SIGNAL</p></div><aside className="country-card"><span className="country-flag">{country.flag}</span><p className="eyebrow">TRENDING FROM</p><h2>{country.city}</h2><div className="country-stat"><span>MONTHLY LISTENERS</span><strong>{country.listeners}</strong></div><p className="country-genre">{country.genre}</p><div className="artist-pills">{country.artists.map((artist) => <button key={artist}>{artist} <ArrowUpRight size={12} /></button>)}</div><button className="queue-play" disabled={!tracks[0]} onClick={() => tracks[0] && onPlay(tracks[0])}><Play size={16} fill="currentColor" /> {status === 'loading' ? 'Finding local music…' : 'Start listening locally'}</button></aside></section><div className="country-picker">{(Object.keys(countryData) as (keyof typeof countryData)[]).map((name) => <button className={selected === name ? 'active' : ''} onClick={() => setSelected(name)} key={name}>{countryData[name].flag} {name}</button>)}</div><section className="section-block"><Heading title={`Live tracks from ${selected}`} />{status === 'error' ? <div className="empty-state"><h3>Local music is unavailable right now.</h3></div> : status === 'loading' ? <div className="empty-state"><h3>Tuning into the local signal…</h3></div> : <div className="track-list">{tracks.slice(0, 6).map((song, index) => <TrackRow key={song.id} song={song} index={index} onOpen={() => onOpen(song)} onPlay={() => onPlay(song)} />)}</div>}</section></>
}

function WeatherView({ tracks, summary, setTracks, setSummary, onPlay }: { tracks: Song[]; summary: string | null; setTracks: (tracks: Song[]) => void; setSummary: (summary: string | null) => void; onPlay: (song: Song) => void }) {
  const [city, setCity] = useState('')
  const [loading, setLoading] = useState(false)
  const load = () => { if (!city.trim()) return setSummary('Enter a city to create your weather mix.'); setLoading(true); setSummary(null); getWeatherMix(city).then((mix) => { setTracks(mix.tracks); setSummary(`${mix.weather.city} · ${Math.round(mix.weather.temperature)}°C · ${mix.weather.description}`) }).catch((error: unknown) => setSummary(error instanceof Error ? error.message : 'Unable to load weather.')).finally(() => setLoading(false)) }
  return <><div className="page-intro compact-intro"><p className="eyebrow">LIVE WEATHER SYNC</p><h1>The sky made<br />you a <em>mixtape.</em></h1><p>We match your atmosphere, not just the forecast.</p></div><div className="search-hero"><CloudSun size={20} /><input value={city} onChange={(event) => setCity(event.target.value)} onKeyDown={(event) => event.key === 'Enter' && load()} placeholder="Enter your city" /><button onClick={load} aria-label="Create weather mix"><Map size={18} /></button></div><section className="weather-now"><CloudSun size={24} /><div><span>YOUR LOCAL SOUND WEATHER</span><h3>{loading ? 'Reading the sky…' : summary || 'Enter a city to create a live weather mix.'}</h3></div></section><div className="weather-grid">{tracks.slice(0, 3).map((song, index) => <GlowCard customSize glowColor={index === 1 ? 'orange' : index === 2 ? 'purple' : 'blue'} className={`weather-card ${index === 1 ? 'gold' : index === 2 ? 'violet' : 'blue'}`} key={song.id}><Artwork song={song} compact /><p className="eyebrow">WEATHER MIX</p><h2>{song.title}</h2><p>{song.artist} · {song.tags[0]}</p><button onClick={() => onPlay(song)}><Play size={16} fill="currentColor" /> Tune in</button></GlowCard>)}</div>{summary && !tracks.length && !loading && <div className="empty-state"><Sparkles size={24} /><h3>{summary}</h3></div>}</>
}

function RouletteView({ song, roulette, onSpin, onPlay }: { song: Song | null; roulette: { spinning: boolean; result: string }; onSpin: () => void; onPlay: (song: Song) => void }) {
  return <div className="roulette-page"><div className="roulette-orbit r-one" /><div className="roulette-orbit r-two" /><p className="eyebrow">LEAVE IT TO CHANCE</p><h1>What if your<br />next favourite came<br /><em>out of nowhere?</em></h1><p>One spin crosses a genre, country, language, decade and mood you might never have asked for.</p><button className={roulette.spinning ? 'roulette-button spinning' : 'roulette-button'} onClick={onSpin}><Dices size={29} /><span>{roulette.spinning ? 'Finding a signal…' : 'Surprise me'}</span></button>{song && <AnimatePresence mode="wait"><motion.div key={song.id} initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} className="roulette-result"><Artwork song={song} compact /><span>YOUR RANDOM ROUTE · {song.tags[0]}</span><h2>{roulette.result}</h2><button onClick={() => onPlay(song)}>Listen now <Play size={14} fill="currentColor" /></button></motion.div></AnimatePresence>}</div>
}

function TravelView({ tracks, setTracks, travel, setTravel, hours, setHours, onPlay }: { tracks: Song[]; setTracks: (tracks: Song[]) => void; travel: string; setTravel: (value: string) => void; hours: number; setHours: (value: number) => void; onPlay: (song: Song) => void }) {
  const options = ['Road Trip', 'Flight', 'Train', 'Camping', 'Beach', 'Mountains', 'Night Drive']
  const [destination, setDestination] = useState('')
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const generate = () => { if (!destination.trim()) return setMessage('Enter a destination first.'); setLoading(true); setMessage(null); getTravelPlaylist(destination, travel, hours, travel).then((playlist) => { setTracks(playlist.tracks); setTitle(playlist.title) }).catch((error: unknown) => setMessage(error instanceof Error ? error.message : 'Unable to build this route.')).finally(() => setLoading(false)) }
  const save = async () => {
    if (!tracks.length || !title) return
    setLoading(true)
    try {
      const { playlist } = await createPlaylist({ title, description: `${travel} to ${destination} · ${hours} hours`, source: 'TRAVEL' })
      await Promise.all(tracks.map((song) => addTrackToPlaylist(playlist.id, song)))
      setMessage('Travel playlist saved to your library.')
    } catch (error) { setMessage(error instanceof Error ? error.message : 'Unable to save this playlist.') } finally { setLoading(false) }
  }
  return <><div className="page-intro compact-intro"><p className="eyebrow">SCORE THE JOURNEY</p><h1>Travel playlists<br />that <em>move with you.</em></h1><p>Match the length, landscape, stops and energy curve of wherever you’re going.</p></div><div className="search-hero"><Map size={20} /><input value={destination} onChange={(event) => setDestination(event.target.value)} placeholder="Enter your destination" /><button onClick={generate}><ArrowUpRight size={18} /></button></div><section className="travel-builder"><div className="travel-options"><span className="eyebrow">WHAT’S THE TRIP?</span><div>{options.map((option) => <button className={travel === option ? 'active' : ''} onClick={() => setTravel(option)} key={option}>{option === 'Flight' ? '✈' : option === 'Train' ? '🚆' : option === 'Camping' ? '⛺' : option === 'Beach' ? '☀' : option === 'Mountains' ? '⛰' : option === 'Night Drive' ? '🌙' : '🚗'} {option}</button>)}</div><span className="eyebrow duration-label">HOW LONG?</span><div className="duration"><strong>{hours}h</strong><input type="range" min="1" max="12" value={hours} onChange={(event) => setHours(Number(event.target.value))} /><span>12h</span></div></div><div className="route-preview"><div className="route-line"><i /><i /><i /><i /></div><p className="eyebrow">YOUR AURAL ROUTE</p><h2>{travel} in {hours} acts.</h2><p>{loading ? 'Building your route…' : destination ? `Real Audius tracks for ${destination}.` : 'Enter a destination to generate a real playlist.'}</p><div className="energy-chart"><i /><i /><i /><i /><i /><i /><i /><i /></div><button className="queue-play" onClick={generate}><Play size={16} fill="currentColor" /> Generate playlist</button></div></section>{message && <div className="empty-state"><p>{message}</p></div>}{tracks.length > 0 && <section className="section-block"><Heading title={title || 'Your generated route'} action={<button className="text-button" onClick={save} disabled={loading}>Save to library <Heart size={14} /></button>} /><div className="track-list">{tracks.map((song, index) => <TrackRow key={song.id} song={song} index={index} onOpen={() => undefined} onPlay={() => onPlay(song)} />)}</div></section>}</>
}

function ArtistView({ onPlay }: { onPlay: (song: Song) => void }) {
  const [artists, setArtists] = useState<Array<{ externalArtistId: string; name: string; handle?: string | null; imageUrl?: string | null }>>([])
  const [selected, setSelected] = useState<string | null>(null)
  const [artistTracks, setArtistTracks] = useState<Song[]>([])
  const [status, setStatus] = useState('loading')
  useEffect(() => { getTrackedArtists().then(({ artists }) => { setArtists(artists); setSelected(artists[0]?.externalArtistId ?? null); setStatus('ready') }).catch(() => setStatus('error')) }, [])
  useEffect(() => { if (!selected) return; setStatus('loading tracks'); getArtist(selected).then(({ tracks }) => { setArtistTracks(tracks); setStatus('ready') }).catch(() => setStatus('error')) }, [selected])
  const unfollow = async (id: string) => { await untrackArtist(id); setArtists((current) => current.filter((artist) => artist.externalArtistId !== id)); setSelected((current) => current === id ? null : current) }
  return <><div className="page-intro compact-intro"><p className="eyebrow">FOLLOW THE RISE</p><h1>Artist <em>tracker</em></h1><p>Track artists you discover and listen to their latest Audius releases here.</p></div>{status === 'error' ? <div className="empty-state"><h3>Artist tracking is unavailable right now.</h3></div> : !artists.length && status !== 'loading' ? <div className="empty-state"><h3>No artists tracked yet.</h3><p>Open a live track, then use its artist details in a future update to build your radar.</p></div> : <><section className="artist-events"><Heading title="Artists on your radar" /><div>{artists.map((artist, index) => <article key={artist.externalArtistId}><span>0{index + 1}</span><p><b>{artist.name}</b><small>{artist.handle ? `@${artist.handle}` : 'Audius artist'}</small></p><button className="text-button" onClick={() => setSelected(artist.externalArtistId)}>View</button><button className="text-button" onClick={() => void unfollow(artist.externalArtistId)}>Unfollow</button></article>)}</div></section>{selected && <section className="section-block"><Heading title="Latest releases" />{status === 'loading tracks' ? <div className="empty-state"><h3>Loading releases…</h3></div> : <div className="track-list">{artistTracks.map((song, index) => <TrackRow key={song.id} song={song} index={index} onOpen={() => undefined} onPlay={() => onPlay(song)} />)}</div>}</section>}</>}</>
}

function SettingsView() {
  const [settings, setSettings] = useState({ motion: true, weather: true, private: false, high: true })
  const toggle = (key: keyof typeof settings) => setSettings((value) => ({ ...value, [key]: !value[key] }))
  return <><div className="page-intro compact-intro"><p className="eyebrow">YOUR SPACE, YOUR SETTINGS</p><h1>Fine <em>tune</em> AURAL.</h1><p>Control the detail without losing the magic.</p></div><section className="settings-card"><h2>Experience</h2><SettingRow label="Dynamic themes" info="Adapt AURAL’s palette to your current mood or music." enabled={true} /><SettingRow label="Motion & visual effects" info="Aurora gradients, subtle visualisers, and transitions." enabled={settings.motion} onChange={() => toggle('motion')} /><SettingRow label="Weather sync" info="Use local conditions to keep recommendations atmospheric." enabled={settings.weather} onChange={() => toggle('weather')} /><h2>Listening & privacy</h2><SettingRow label="High quality audio" info="Stream at the richest available quality on Wi-Fi." enabled={settings.high} onChange={() => toggle('high')} /><SettingRow label="Private session" info="Temporarily keep your listening activity to yourself." enabled={settings.private} onChange={() => toggle('private')} /></section></>
}

function SettingRow({ label, info, enabled, onChange }: { label: string; info: string; enabled: boolean; onChange?: () => void }) { return <div className="setting-row"><div><b>{label}</b><p>{info}</p></div><button onClick={onChange} className={enabled ? 'switch on' : 'switch'} aria-label={`Toggle ${label}`}><i /></button></div> }

function SongView({ song, onBack, onPlay, onSave, onTrackArtist }: { song: Song; onBack: () => void; onPlay: () => void; onSave: () => void; onTrackArtist: () => void }) {
  return <><button className="back-button" onClick={onBack}><ChevronRight size={17} /> Back to home</button><section className="song-hero"><Artwork song={song} /><div><p className="eyebrow">SONG STORY <span>•</span> AURAL EXPLAIN</p><h1>{song.title}</h1><p className="song-artist">{song.artist} <span>•</span> {song.album} <span>•</span> 2026</p><div className="song-actions"><GradientButton onClick={onPlay}><Play size={17} fill="currentColor" /> Play song</GradientButton><button className="round-outline" onClick={onSave} aria-label={`Save ${song.title}`}><Heart size={18} /></button>{song.artistId && <button className="round-outline" onClick={onTrackArtist} aria-label={`Track ${song.artist}`}><Star size={18} /></button>}</div><div className="song-metrics"><span><b>102</b> BPM</span><span><b>74%</b> energy</span><span><b>Dream pop</b> mood</span></div></div></section><section className="song-details"><article className="lyrics-panel"><div className="panel-title"><span><Sparkles size={16} /> LYRICS, UNPACKED</span><button>Full lyrics <ArrowUpRight size={14} /></button></div><p>“I kept a little light on / <mark>for the version of me</mark> <br />that didn’t know where to go.”</p><div className="explain"><span>✦</span><div><b>What this line means</b><p>Nova reads this as a gentle promise to your former self — the song’s central image turns loneliness into an act of care.</p></div></div></article><article className="story-panel"><p className="eyebrow">BEHIND THE FREQUENCY</p><h2>A song about leaving<br />the door open to yourself.</h2><p>Luna wrote Glass Horizon after a winter spent moving between cities. The production keeps the vocal near, but lets the instruments feel miles away.</p><button>Read the full story <ChevronRight size={15} /></button></article></section></>
}

function ProfileView({ onPage, onSignOut }: { onPage: (page: Page) => void; onSignOut: () => void }) {
  const [profile, setProfile] = useState<ProfileData | null>(null)
  useEffect(() => { getProfile().then(setProfile).catch(() => setProfile(null)) }, [])
  const name = profile?.user?.displayName ?? 'Listener'
  const stats = profile?.stats
  return <><section className="profile-hero"><div className="avatar avatar-large">{name.slice(0, 2).toUpperCase()}</div><div><p className="eyebrow">LISTENER PROFILE</p><h1>{name} <span>✦</span></h1><p>{profile?.user?.email ?? 'Following wherever the signal gets interesting.'}</p></div><button onClick={onSignOut}><Settings size={17} /> Sign out</button></section><section className="profile-stats"><div><b>{stats?.history ?? '—'}</b><span>tracks in history</span></div><div><b>{stats?.favorites ?? '—'}</b><span>liked songs</span></div><div><b>{stats?.playlists ?? '—'}</b><span>playlists made</span></div><div><b>{stats?.artists ?? '—'}</b><span>artists tracked</span></div></section><section className="profile-grid"><article><p className="eyebrow">YOUR LISTENING HEATMAP</p><h2>Most alive after midnight.</h2><div className="heatmap">{Array.from({ length: 56 }, (_, index) => <i key={index} style={{ opacity: ((index * 7) % 11) / 12 + .15 }} />)}</div><p className="heatmap-key">LOW <span /> HIGH</p></article><article className="achievements"><p className="eyebrow">YOUR LIBRARY</p><span>✦</span><h2>Keep discovering</h2><p>Every saved track helps make AURAL feel more like you.</p><button onClick={() => onPage('Library')}>Open library <ArrowUpRight size={14} /></button></article></section></>
}

export default App
