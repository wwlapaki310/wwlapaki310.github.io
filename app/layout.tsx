import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'aki310 | 秋田賢',
  description:
    'エンジニア。機械学習・IoT・EdgeAI系のシステム設計。半導体、宇宙、セキュリティ界隈。ハッカソン・OSSコントリビューター。',
  openGraph: {
    title: 'aki310 | 秋田賢',
    description: 'Engineer. ML / IoT / EdgeAI. Hackathons & OSS.',
    url: 'https://wwlapaki310.github.io',
    siteName: 'aki310',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    site: '@fox_aki310ooooo',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-bg text-slate-200 antialiased">{children}</body>
    </html>
  )
}
