import postsData from '@/content/posts.json'
import type { Post } from '@/types/post'

export function getStaticPosts(): Post[] {
  return (postsData as Post[]).sort((a, b) => b.date.localeCompare(a.date))
}

export function mergePosts(staticPosts: Post[], rssPost: Post[]): Post[] {
  // RSS記事のblogUrlが静的データのblogUrlと重複している場合は静的データ優先
  const staticUrls = new Set(staticPosts.map((p) => p.blogUrl).filter(Boolean))
  const uniqueRss = rssPost.filter((p) => !p.blogUrl || !staticUrls.has(p.blogUrl))
  return [...staticPosts, ...uniqueRss].sort((a, b) => b.date.localeCompare(a.date))
}
