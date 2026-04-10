import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { PostsSection } from '@/components/PostsSection'
import { getStaticPosts, mergePosts } from '@/lib/posts'
import { fetchHatenaPosts } from '@/lib/hatena'
import { messages } from '@/i18n/messages'

export const metadata: Metadata = {
  title: messages.en.meta.title,
  description: messages.en.meta.description,
  alternates: { canonical: '/en' },
}

export default async function EnPage() {
  const m = messages.en
  const staticPosts = getStaticPosts()
  const rssPosts = await fetchHatenaPosts()
  const allPosts = mergePosts(staticPosts, rssPosts)

  return (
    <main>
      <Hero t={m.hero} />
      <PostsSection posts={allPosts} locale="en" t={m.posts} />
      <footer className="border-t border-border py-8 text-center text-xs text-muted">
        {m.footer(new Date().getFullYear())}
      </footer>
    </main>
  )
}
