import Image from 'next/image'
import type { Post, Locale } from '@/types/post'
import { TYPE_LABELS, TYPE_COLORS } from '@/types/post'

export function PostCard({ post, locale }: { post: Post; locale: Locale }) {
  const title = locale === 'en' && post.titleEn ? post.titleEn : post.title
  const desc  = locale === 'en' && post.descEn  ? post.descEn  : post.desc

  return (
    <article className="flex flex-col bg-surface border border-border rounded-xl overflow-hidden hover:border-accent/40 transition-colors duration-200 group">
      {/* Thumbnail */}
      <div className="relative w-full h-36 bg-bg flex items-center justify-center overflow-hidden">
        {post.image ? (
          <Image
            src={post.image}
            alt={title}
            fill
            className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-200"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <span className="text-4xl select-none">{post.icon ?? '📄'}</span>
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
              {link.label} ↗
            </a>
          ))}
        </div>
      )}
    </article>
  )
}
