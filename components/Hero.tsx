import Image from 'next/image'
import { LangSwitch } from '@/components/LangSwitch'
import type { Messages } from '@/i18n/messages'

function IconGitHub({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function IconX({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function IconPencil({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
    </svg>
  )
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}

const SOCIAL_LINKS = [
  { label: 'GitHub',     url: 'https://github.com/wwlapaki310',                              Icon: IconGitHub  },
  { label: 'X (Twitter)',url: 'https://twitter.com/fox_aki310ooooo',                         Icon: IconX       },
  { label: 'LinkedIn',   url: 'https://www.linkedin.com/in/satoru-akita-6070a4145/',         Icon: IconLinkedIn},
  { label: 'Blog',       url: 'https://akisatooo.hatenablog.com/',                           Icon: IconPencil  },
  { label: 'Email',      url: 'mailto:wwlap24@gmail.com',                                    Icon: IconMail    },
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
      <div className="absolute top-4 right-4 z-10">
        <LangSwitch />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 py-16">

        {/* ── Top: avatar / name / bio / socials ── */}
        <div className="flex flex-col sm:flex-row items-start gap-8 mb-10">
          <div className="shrink-0 mx-auto sm:mx-0">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-accent/30">
              <Image
                src="/images/kitune2.png"
                alt={t.name}
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 flex-1 min-w-0">
            <div>
              <h1 className="text-3xl font-medium text-white">{t.name}</h1>
              <p className="text-muted text-sm mt-0.5">{t.nameJa}</p>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">{t.bio}</p>

            {/* Social icons + CV */}
            <div className="flex items-center gap-2 flex-wrap">
              {SOCIAL_LINKS.map(({ label, url, Icon }) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="flex items-center justify-center w-8 h-8 rounded-lg border border-border text-muted hover:border-accent/50 hover:text-accent-light transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
              <a
                href="https://drive.google.com/file/d/1LpjFMfg2yacvzPvOoV02PSXoHZ_KWOoP/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-muted border border-accent/30 rounded px-3 py-1.5 hover:border-accent/60 hover:text-accent-light transition-colors"
              >
                {t.cvLabel} ↗
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom: certs / experiences / hobbies ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* 資格 */}
          <div>
            <h2 className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
              {t.certsLabel}
            </h2>
            <ul className="flex flex-col gap-1.5">
              {t.certs.map((c) => (
                <li key={c.abbr} className="flex items-start gap-1.5 text-xs text-slate-300">
                  <span className="shrink-0 text-accent/60 mt-0.5">▸</span>
                  {c.name}
                </li>
              ))}
            </ul>
          </div>

          {/* 経験 */}
          <div>
            <h2 className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
              {t.experiencesLabel}
            </h2>
            <ul className="flex flex-col gap-1.5">
              {t.experiences.map((e) => (
                <li key={e} className="flex items-start gap-1.5 text-xs text-slate-300">
                  <span className="shrink-0 text-accent/60 mt-0.5">▸</span>
                  {e}
                </li>
              ))}
            </ul>
          </div>

          {/* 趣味 */}
          <div>
            <h2 className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
              {t.hobbiesLabel}
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {t.hobbies.map((h) => (
                <span
                  key={h}
                  className="text-xs text-muted border border-border rounded-full px-2.5 py-0.5 hover:border-border/80 hover:text-slate-300 transition-colors"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
