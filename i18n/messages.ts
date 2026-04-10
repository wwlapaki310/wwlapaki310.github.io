import type { Locale } from '@/types/post'

export const messages = {
  ja: {
    meta: {
      title: 'aki310 | 秋田賢',
      description: 'エンジニア。機械学習・IoT・EdgeAI系のシステム設計。ハッカソン・OSS。',
    },
    hero: {
      name: 'aki310',
      nameJa: '秋田 賢',
      bio: 'エンジニア。本業は機械学習・IoT系のシステム設計（EdgeAI / IMX500 / AITRIOS）。半導体、宇宙、セキュリティ界隈に生息。ハッカソンとOSSが好き。',
      certs: [
        '情報処理安全確保支援士',
        'Google Cloud Professional Architect',
        'AWS SAA',
        '二級小型船舶操縦士',
      ],
      cvLabel: 'CV (PDF)',
      blogLabel: 'ブログ',
    },
    posts: {
      heading: 'Posts',
      filters: {
        all: 'すべて',
        blog: 'Blog',
        report: '体験記',
        portfolio: 'Portfolio',
        slide: 'Slides',
      },
      showMore: (n: number) => `残り ${n} 件を見る ↓`,
      collapse: '折りたたむ ↑',
    },
    footer: (year: number) => `© ${year} Satoru Akita (aki310)`,
  },

  en: {
    meta: {
      title: 'aki310 | Satoru Akita',
      description: 'Engineer. ML / IoT / EdgeAI system design. Hackathons & OSS.',
    },
    hero: {
      name: 'aki310',
      nameJa: 'Satoru Akita',
      bio: 'Engineer specializing in ML / IoT system design (EdgeAI / IMX500 / AITRIOS). Active in semiconductor, space & security communities. Passionate about hackathons and open source.',
      certs: [
        'Registered Information Security Specialist',
        'Google Cloud Professional Architect',
        'AWS SAA',
        'Class 2 Small Vessel Operator',
      ],
      cvLabel: 'CV (PDF)',
      blogLabel: 'Blog',
    },
    posts: {
      heading: 'Posts',
      filters: {
        all: 'All',
        blog: 'Blog',
        report: 'Reports',
        portfolio: 'Portfolio',
        slide: 'Slides',
      },
      showMore: (n: number) => `Show ${n} more ↓`,
      collapse: 'Collapse ↑',
    },
    footer: (year: number) => `© ${year} Satoru Akita (aki310)`,
  },
} satisfies Record<Locale, unknown>

export type Messages = (typeof messages)['ja']
