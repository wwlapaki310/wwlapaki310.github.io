'use client'

import { useState, useEffect } from 'react'
import { PostCard } from '@/components/PostCard'
import type { Post, PostType, Locale } from '@/types/post'
import type { Messages } from '@/i18n/messages'
import { autoTranslate } from '@/lib/translate'

const INITIAL_COUNT = 12

interface FilterDef {
  key: PostType | 'all'
  label: string
}

export function PostsSection({
  posts,
  locale,
  t,
}: {
  posts: Post[]
  locale: Locale
  t: Messages['posts']
}) {
  const [activeFilter, setActiveFilter] = useState<PostType | 'all'>('all')
  const [showAll, setShowAll] = useState(false)
  const [translatedPosts, setTranslatedPosts] = useState<Post[]>(posts)

  useEffect(() => {
    if (locale !== 'en') return
    autoTranslate(posts).then(translations => {
      setTranslatedPosts(posts.map(p => ({
        ...p,
        titleEn: translations[p.id]?.titleEn ?? p.titleEn ?? p.title,
        descEn:  translations[p.id]?.descEn  ?? p.descEn  ?? p.desc,
      })))
    })
  }, [locale, posts])

  const displayPosts = locale === 'en' ? translatedPosts : posts

  const FILTERS: FilterDef[] = [
    { key: 'all',       label: t.filters.all },
    { key: 'blog',      label: t.filters.blog },
    { key: 'report',    label: t.filters.report },
    { key: 'portfolio', label: t.filters.portfolio },
    { key: 'slide',     label: t.filters.slide },
  ]

  const filtered = activeFilter === 'all' ? displayPosts : displayPosts.filter((p) => p.type === activeFilter)
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT)
  const hiddenCount = filtered.length - INITIAL_COUNT

  function handleFilterChange(key: PostType | 'all') {
    setActiveFilter(key)
    setShowAll(false)
  }

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-medium text-white mb-8">{t.heading}</h2>

      {/* Filter tabs */}
      <div className="flex gap-2 flex-wrap mb-8">
        {FILTERS.map(({ key, label }) => {
          const count = key === 'all' ? posts.length : posts.filter((p) => p.type === key).length
          const isActive = activeFilter === key
          return (
            <button
              key={key}
              onClick={() => handleFilterChange(key)}
              className={`px-4 py-1.5 rounded-full text-sm border transition-colors duration-150 ${
                isActive
                  ? 'bg-accent text-white border-accent'
                  : 'bg-transparent text-muted border-border hover:border-accent/40 hover:text-white'
              }`}
            >
              {label}
              <span className={`ml-1.5 text-xs ${isActive ? 'text-white/70' : 'text-muted'}`}>
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visible.map((post) => (
          <PostCard key={post.id} post={post} locale={locale} />
        ))}
      </div>

      {/* Show more / collapse */}
      {filtered.length > INITIAL_COUNT && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-6 py-2 rounded-full border border-border text-muted text-sm hover:border-accent/40 hover:text-white transition-colors"
          >
            {showAll ? t.collapse : t.showMore.replace('{n}', String(hiddenCount))}
          </button>
        </div>
      )}
    </section>
  )
}
