import type { Locale } from '@/types/post'

export interface CertItem {
  abbr: string
  name: string
}

export const messages = {
  ja: {
    meta: {
      title: 'aki310 | 秋田賢',
      description: 'エンジニア。機械学習・IoT・EdgeAI系のシステム設計。ハッカソン・OSS。',
    },
    hero: {
      name: 'aki310',
      nameJa: '秋田 賢',
      bio: 'エンジニア。本業は機械学習・IoT系のシステム設計。AI/画像処理系のシステムエンジニアであり、Forward-Deployed Engineerです。半導体、機械学習、宇宙、生物、セキュリティ界隈に生息しています。美味しいごはんと楽しいサービス開発が好きです。',
      certsLabel: '資格',
      certs: [
        { abbr: 'RISS',   name: '情報処理安全確保支援士（未登録）' },
        { abbr: 'GCP',    name: 'Google Certified Professional - Cloud Architect' },
        { abbr: 'AWS SAA',name: 'AWS Certified Solutions Architect - Associate' },
        { abbr: 'TF Dev', name: 'TensorFlow Developer' },
        { abbr: '応情',    name: '応用情報技術者' },
        { abbr: '2級船舶', name: '二級小型船舶操縦士' },
      ] satisfies CertItem[],
      experiencesLabel: '経験',
      experiences: [
        '分子ロボコン 世界大会優勝',
        '防災アプリ大会 世界3位',
        '機械学習サークル東北支部 立ち上げ',
        'SecHack365 修了',
        'SXSW 派遣',
        'SWカンファレンス 運営',
        'ハッカソン 決勝進出',
        'JAXAスペーススクール 参加',
      ],
      hobbiesLabel: '趣味',
      hobbies: ['読書', '工場見学', 'マラソン', 'スキー', 'ゴルフ', '料理', 'ゲーム', '資格チャレンジ', '回転寿司'],
      cvLabel: 'CV (PDF)',
      blogLabel: 'ブログ',
    },
    posts: {
      heading: 'Activity',
      filters: {
        all: 'すべて',
        blog: 'ブログ',
        report: '体験記',
        portfolio: '開発物',
        slide: 'Slides',
      },
      showMore: '残り {n} 件を見る ↓',
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
      bio: 'Engineer specializing in ML / IoT system design. Systems engineer in AI/image processing and Forward-Deployed Engineer. Active in semiconductor, ML, space, biology & security communities. Love good food and fun product development.',
      certsLabel: 'Certifications',
      certs: [
        { abbr: 'RISS',      name: 'Registered Information Security Specialist' },
        { abbr: 'GCP',       name: 'Google Certified Professional - Cloud Architect' },
        { abbr: 'AWS SAA',   name: 'AWS Certified Solutions Architect - Associate' },
        { abbr: 'TF Dev',    name: 'TensorFlow Developer' },
        { abbr: 'AP',        name: 'Applied Information Technology Engineer' },
        { abbr: 'Class 2',   name: 'Class 2 Small Vessel Operator License' },
      ] satisfies CertItem[],
      experiencesLabel: 'Experience',
      experiences: [
        'Molecular Robotics World Champion',
        'Disaster App Contest World 3rd Place',
        'Founded ML Circle Tohoku Branch',
        'SecHack365 Graduate',
        'SXSW Dispatch',
        'SW Conference Organizer',
        'Hackathon Finalist',
        'JAXA Space School',
      ],
      hobbiesLabel: 'Hobbies',
      hobbies: ['Reading', 'Factory Tours', 'Marathon', 'Skiing', 'Golf', 'Cooking', 'Gaming', 'Certifications', 'Conveyor Belt Sushi'],
      cvLabel: 'CV (PDF)',
      blogLabel: 'Blog',
    },
    posts: {
      heading: 'Activity',
      filters: {
        all: 'All',
        blog: 'Blog',
        report: 'Reports',
        portfolio: 'Projects',
        slide: 'Slides',
      },
      showMore: 'Show {n} more ↓',
      collapse: 'Collapse ↑',
    },
    footer: (year: number) => `© ${year} Satoru Akita (aki310)`,
  },
} satisfies Record<Locale, unknown>

export type Messages = (typeof messages)['ja']
