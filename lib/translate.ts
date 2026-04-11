const CACHE_VERSION = 'v1'
const CACHE_KEY = `auto_translate_${CACHE_VERSION}`

type TranslationCache = Record<string, { titleEn: string; descEn: string }>

function loadCache(): TranslationCache {
  try {
    return JSON.parse(localStorage.getItem(CACHE_KEY) ?? '{}')
  } catch {
    return {}
  }
}

function saveCache(cache: TranslationCache) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache))
  } catch {}
}

async function translateText(text: string): Promise<string> {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=ja&tl=en&dt=t&q=${encodeURIComponent(text)}`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`translate error: ${res.status}`)
  const json = await res.json()
  return (json[0] as [string][]).map(seg => seg[0]).join('')
}

export async function autoTranslate(
  posts: { id: string; title: string; desc: string }[]
): Promise<Record<string, { titleEn: string; descEn: string }>> {
  const cache = loadCache()
  const result: Record<string, { titleEn: string; descEn: string }> = {}
  const toFetch: typeof posts = []

  for (const post of posts) {
    if (cache[post.id]) {
      result[post.id] = cache[post.id]
    } else {
      toFetch.push(post)
    }
  }

  for (const post of toFetch) {
    try {
      const [titleEn, descEn] = await Promise.all([
        translateText(post.title),
        translateText(post.desc),
      ])
      result[post.id] = { titleEn, descEn }
      cache[post.id] = { titleEn, descEn }
    } catch {
      result[post.id] = { titleEn: post.title, descEn: post.desc }
    }
  }

  if (toFetch.length > 0) saveCache(cache)
  return result
}
