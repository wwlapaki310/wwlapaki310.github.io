'use client'

import { useState } from 'react'
import { PostCard } from '@/components/PostCard'
import type { Post, PostType } from '@/types/post'
import { TYPE_LABELS } from '@/types/post'

const FILTERS: { key: PostType | 'all'; label: string }[] = [
  { key: 'all', label: 'すべて' },
  { key: 'blog', label: TYPE_LABELS.blog },
  { key: 'report', label: TYPE_LABELS.report },
  { key: 'portfolio', label: TYPE_LABELS.portfolio },
  { key: 'slide', label: TYPE_LABELS.slide },
]

const INITIAL_COUNT = 6

export function PostsSection({ posts }: { posts: Post[] }) {
  const [activeFilter, setActiveFilter] = useState<PostType | 'all'>('all')
  const [showAll, setShowAll] = useState(false)

  const filtered = activeFilter === 'all' ? posts : posts.filter((p) => p.type === activeFilter)
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT)
  const hiddenCount = filtered.length - INITIAL_COUNT

  function handleFilterChange(key: PostType | 'all') {
    setActiveFilter(key)
    setShowAll(false)
  }

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-medium text-white mb-8">Posts</h2>

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
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Show more / collapse */}
      {filtered.length > INITIAL_COUNT && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-6 py-2 rounded-full border border-border text-muted text-sm hover:border-accent/40 hover:text-white transition-colors"
          >
            {showAll ? '折りたたむ ↑' : `残り ${hiddenCount} 件を見る ↓`}
          </button>
        </div>
      )}
    </section>
  )
}
