import Image from 'next/image'
import { LangSwitch } from '@/components/LangSwitch'
import type { Messages } from '@/i18n/messages'

const SOCIAL_LINKS = [
  { label: 'Twitter / X', url: 'https://twitter.com/fox_aki310ooooo', icon: '𝕏' },
  { label: 'GitHub',      url: 'https://github.com/wwlapaki310',      icon: '⌥' },
  { label: 'LinkedIn',    url: 'https://www.linkedin.com/in/satoru-akita-6070a4145/', icon: 'in' },
  { label: 'Blog',        url: 'https://akisatooo.hatenablog.com/',   icon: '✏' },
  { label: 'Email',       url: 'mailto:wwlap24@gmail.com',            icon: '✉' },
]

export function Hero({ t }: { t: Messages['hero'] }) {
  return (
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

      {/* lang switcher — top right */}
      <div className="absolute top-4 right-4">
        <LangSwitch />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 py-20 flex flex-col sm:flex-row items-center gap-10">
        {/* Avatar */}
        <div className="shrink-0">
          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-accent/30">
            <Image
              src="/images/kitune2.png"
              alt={t.name}
              width={112}
              height={112}
              className="object-cover"
            />
          </div>
        </div>

        {/* Bio */}
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-3xl font-medium text-white">{t.name}</h1>
            <p className="text-muted text-sm mt-0.5">{t.nameJa}</p>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed max-w-xl">{t.bio}</p>

          <div className="flex flex-wrap gap-2 text-xs text-muted">
            {t.certs.map((c) => (
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
              {t.cvLabel} ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
