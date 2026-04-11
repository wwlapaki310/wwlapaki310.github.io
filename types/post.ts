export type PostType = 'blog' | 'report' | 'portfolio' | 'slide'
export type Locale = 'ja' | 'en'

export interface PostLink {
  label: string
  url: string
}

export interface Post {
  id: string
  type: PostType
  date: string        // "2026-01" or "2025-12-25"
  title: string
  titleEn?: string
  desc: string
  descEn?: string
  image?: string      // path under /images/ — optional
  icon?: string       // emoji fallback when no image
  links: PostLink[]
  blogUrl?: string    // canonical blog URL (for blog/report types)
}

export const TYPE_LABELS: Record<Locale, Record<PostType, string>> = {
  ja: { blog: 'ブログ', report: '体験記', portfolio: '開発物', slide: 'Slides' },
  en: { blog: 'Blog', report: 'Report',  portfolio: 'Portfolio', slide: 'Slides' },
}

export const TYPE_COLORS: Record<PostType, string> = {
  blog:      'bg-blue-900/40  text-blue-300  border-blue-700/50',
  report:    'bg-amber-900/40 text-amber-300 border-amber-700/50',
  portfolio: 'bg-green-900/40 text-green-300 border-green-700/50',
  slide:     'bg-purple-900/40 text-purple-300 border-purple-700/50',
}
