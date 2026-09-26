export const languageQueries: Record<string, string[]> = {
  hi: ['hindi song', 'bollywood', 'punjabi', 'desi'],
  ta: ['tamil song', 'kollywood'],
  te: ['telugu song', 'tollywood'],
  kn: ['kannada song'],
  ml: ['malayalam song'],
  bn: ['bengali song', 'bangla'],
  mr: ['marathi song'],
  pa: ['punjabi song'],
  ko: ['kpop', 'korean'],
  ja: ['jpop', 'city pop', 'anime'],
  es: ['latin', 'spanish', 'reggaeton'],
  pt: ['brazilian', 'samba', 'bossa nova'],
  fr: ['french pop'],
  ar: ['arabic music'],
  en: ['indie pop', 'english songs'],
}

export const countryCatalog: Record<string, { genres: string[]; queries: string[]; lang: string }> = {
  India: { lang: 'hi', genres: ['Bollywood', 'Punjabi', 'Tamil'], queries: ['hindi song', 'punjabi', 'tamil song'] },
  Japan: { lang: 'ja', genres: ['City Pop', 'Anime', 'Jazz'], queries: ['city pop', 'jpop', 'anime'] },
  USA: { lang: 'en', genres: ['Hip Hop', 'Rock', 'Pop'], queries: ['hip hop', 'american pop', 'rock'] },
  UK: { lang: 'en', genres: ['Indie', 'Pop', 'Electronic'], queries: ['uk indie', 'british pop', 'uk garage'] },
  Brazil: { lang: 'pt', genres: ['Samba', 'Bossa Nova', 'Funk'], queries: ['bossa nova', 'samba', 'brazilian'] },
  Korea: { lang: 'ko', genres: ['K-pop', 'R&B', 'Indie'], queries: ['kpop', 'korean r&b', 'k indie'] },
  Nigeria: { lang: 'en', genres: ['Afrobeats', 'Alté', 'Highlife'], queries: ['afrobeats', 'alte', 'nigerian'] },
}

export function queriesForLanguage(lang?: string) {
  if (!lang) return []
  return languageQueries[lang.trim().toLowerCase()] ?? []
}

export function expandSearchQueries(query: string, lang?: string) {
  const cleaned = query.trim()
  const language = queriesForLanguage(lang)
  if (!cleaned) return language.slice(0, 3)
  if (!language.length) return [cleaned]
  return [cleaned, ...language.filter((item) => !cleaned.toLowerCase().includes(item.split(' ')[0]))].slice(0, 4)
}
