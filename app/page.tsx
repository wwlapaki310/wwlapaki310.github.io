import Image from 'next/image'
import { PostsSection } from '@/components/PostsSection'
import { getStaticPosts, mergePosts } from '@/lib/posts'
import { fetchHatenaPosts } from '@/lib/hatena'

const SOCIAL_LINKS = [
  { label: 'Twitter / X', url: 'https://twitter.com/fox_aki310ooooo', icon: '𝕏' },
  { label: 'GitHub', url: 'https://github.com/wwlapaki310', icon: '⌥' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/satoru-akita-6070a4145/', icon: 'in' },
  { label: 'Email', url: 'mailto:wwlap24@gmail.com', icon: '✉' },
]

export default async function HomePage() {
  const staticPosts = getStaticPosts()
  const rssPosts = await fetchHatenaPosts()
  const allPosts = mergePosts(staticPosts, rssPosts)

  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-border">
        {/* subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#7c6ff7 1px, transparent 1px), linear-gradient(90deg, #7c6ff7 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 py-20 flex flex-col sm:flex-row items-center gap-10">
          {/* Avatar */}
          <div className="shrink-0">
            <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-accent/30">
              <Image
                src="/images/kitune2.png"
                alt="aki310"
                width={112}
                height={112}
                className="object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-3xl font-medium text-white">aki310</h1>
              <p className="text-muted text-sm mt-0.5">Satoru Akita / 秋田 賢</p>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
              エンジニア。本業は機械学習・IoT系のシステム設計（EdgeAI / IMX500 / AITRIOS）。
              半導体、宇宙、セキュリティ界隈に生息。ハッカソンとOSSが好き。
            </p>

            <div className="flex flex-wrap gap-2 text-xs text-muted">
              {[
                '情報処理安全確保支援士',
                'Google Cloud Professional Architect',
                'AWS SAA',
                '二級小型船舶操縦士',
              ].map((c) => (
                <span key={c} className="border border-border rounded px-2 py-0.5">{c}</span>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.url}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted border border-border rounded px-3 py-1.5 hover:border-accent/50 hover:text-accent-light transition-colors"
                >
                  {s.icon} {s.label}
                </a>
              ))}
              <a
                href="https://drive.google.com/file/d/1WaaCUJOFb_DxdXQ1hG7ZQF_cu7Jbm_pr/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted border border-accent/30 rounded px-3 py-1.5 hover:border-accent/60 hover:text-accent-light transition-colors"
              >
                CV (PDF) ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Posts ── */}
      <PostsSection posts={allPosts} />

      {/* ── Footer ── */}
      <footer className="border-t border-border py-8 text-center text-xs text-muted">
        © {new Date().getFullYear()} Satoru Akita (aki310)
      </footer>
    </main>
  )
}
