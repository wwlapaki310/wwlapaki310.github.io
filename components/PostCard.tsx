import Image from 'next/image'
import type { Post, Locale } from '@/types/post'
import { TYPE_LABELS, TYPE_COLORS } from '@/types/post'

const LINK_LABEL_EN: Record<string, string> = {
  'ブログ': 'Blog',
  '体験記': 'Report',
  '詳細':   'Details',
  'プレイ': 'Play',
}

function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/)
  return match?.[1] ?? null
}

export function PostCard({ post, locale }: { post: Post; locale: Locale }) {
  const title = locale === 'en' && post.titleEn ? post.titleEn : post.title
  const desc  = locale === 'en' && post.descEn  ? post.descEn  : post.desc

  const youtubeLink = post.links.find(l => getYouTubeId(l.url))
  const youtubeId   = youtubeLink ? getYouTubeId(youtubeLink.url) : null

  return (
    <article className="flex flex-col bg-surface border border-border rounded-xl overflow-hidden hover:border-accent/40 transition-colors duration-200 group">
      {/* Thumbnail / Embed */}
      <div className="relative w-full h-52 bg-bg flex items-center justify-center overflow-hidden">
        {youtubeId ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        ) : post.image ? (
          <Image
            src={post.image}
            alt={title}
            fill
            className="object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-200"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-surface to-bg">
            <span className="text-5xl select-none opacity-80">{post.icon ?? '📄'}</span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col gap-2 p-4 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${TYPE_COLORS[post.type]}`}>
            {TYPE_LABELS[locale][post.type]}
          </span>
          <span className="text-xs text-muted">{post.date}</span>
        </div>

        <h3 className="text-sm font-medium text-white leading-snug">{title}</h3>
        <p className="text-xs text-muted leading-relaxed flex-1 line-clamp-3">{desc}</p>
      </div>

      {/* Footer links */}
      {post.links.length > 0 && (
        <div className="flex gap-2 px-4 pb-4 flex-wrap">
          {post.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted border border-border rounded px-2 py-1 hover:border-accent/60 hover:text-accent-light transition-colors"
            >
              {(locale === 'en' ? (LINK_LABEL_EN[link.label] ?? link.label) : link.label)} ↗
            </a>
          ))}
        </div>
      )}
    </article>
  )
}
