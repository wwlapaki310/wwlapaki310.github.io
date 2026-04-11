import { XMLParser } from 'fast-xml-parser'
import type { Post } from '@/types/post'

const RSS_URL = 'https://akisatooo.hatenablog.com/rss'

// はてなブログのカテゴリから type を判定
const REPORT_KEYWORDS = ['ハッカソン', 'イベント', '参加', '体験記', '受講', 'ボランティア', '合格', 'スタッフ']

function inferType(categories: string[], title: string): Post['type'] {
  const text = [...categories, title].join(' ')
  if (REPORT_KEYWORDS.some((kw) => text.includes(kw))) return 'report'
  return 'blog'
}

interface RssItem {
  title: string
  link: string
  pubDate: string
  description: string
  'dc:subject'?: string | string[]
}

export async function fetchHatenaPosts(): Promise<Post[]> {
  try {
    const res = await fetch(RSS_URL, {
      next: { revalidate: 3600 }, // 1 hour cache
    })
    if (!res.ok) return []
    const xml = await res.text()

    const parser = new XMLParser({ ignoreAttributes: false, isArray: (name) => name === 'item', processEntities: { maxTotalExpansions: 100000 } })
    const parsed = parser.parse(xml)
    const items: RssItem[] = parsed?.rss?.channel?.item ?? []

    return items.map((item, i): Post => {
      const categories = Array.isArray(item['dc:subject'])
        ? item['dc:subject']
        : item['dc:subject']
        ? [item['dc:subject']]
        : []

      const dateRaw = item.pubDate ?? ''
      const date = dateRaw ? new Date(dateRaw).toISOString().slice(0, 10) : ''

      const rawHtml = item.description ?? ''

      // description HTML から最初の画像URLを抽出
      const imgMatch = rawHtml.match(/<img[^>]+src="(https?:[^"]+)"/)
      const image = imgMatch?.[1]

      // strip HTML tags from description
      const desc = rawHtml
        .replace(/<[^>]+>/g, '')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 120)

      return {
        id: `hatena-${i}-${date}`,
        type: inferType(categories, item.title ?? ''),
        date,
        title: item.title ?? '',
        desc,
        image,
        links: [{ label: 'ブログ', url: item.link ?? '' }],
        blogUrl: item.link ?? '',
      }
    })
  } catch {
    return []
  }
}
