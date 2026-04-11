'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function LangSwitch() {
  const pathname = usePathname()
  const isEn = pathname.startsWith('/en')

  return (
    <div className="flex items-center gap-1 text-xs border border-border rounded-full px-1 py-0.5">
      <Link
        href="/"
        className={`px-2 py-0.5 rounded-full transition-colors ${
          !isEn
            ? 'bg-accent text-white'
            : 'text-muted hover:text-white'
        }`}
      >
        JA
      </Link>
      <Link
        href="/en/"
        className={`px-2 py-0.5 rounded-full transition-colors ${
          isEn
            ? 'bg-accent text-white'
            : 'text-muted hover:text-white'
        }`}
      >
        EN
      </Link>
    </div>
  )
}
