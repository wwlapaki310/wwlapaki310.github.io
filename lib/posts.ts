import activityData from '@/content/activity.json'
import type { Post, HatenaOverride } from '@/types/post'

type ActivityEntry = Post | HatenaOverride

const allEntries = activityData as ActivityEntry[]

const overrideMap = new Map(
  allEntries
    .filter((e): e is HatenaOverride => 'hatenaOverride' in e)
    .map((o) => [o.blogUrl, o])
)

export function getStaticPosts(): Post[] {
  return allEntries
    .filter((e): e is Post => !('hatenaOverride' in e))
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function mergePosts(staticPosts: Post[], rssPost: Post[]): Post[] {
  // RSS記事のblogUrlが静的データのblogUrlと重複している場合は静的データ優先
  const staticUrls = new Set(staticPosts.map((p) => p.blogUrl).filter(Boolean))
  const uniqueRss = rssPost
    .filter((p) => !p.blogUrl || !staticUrls.has(p.blogUrl))
    .map((p) => {
      const ov = p.blogUrl ? overrideMap.get(p.blogUrl) : undefined
      if (!ov) return p
      return {
        ...p,
        ...(ov.type !== undefined && { type: ov.type }),
        ...(ov.image !== undefined && { image: ov.image }),
      }
    })
  return [...staticPosts, ...uniqueRss].sort((a, b) => b.date.localeCompare(a.date))
}
