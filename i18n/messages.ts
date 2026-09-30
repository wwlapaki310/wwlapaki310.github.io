import type { Locale } from '@/types/post'

export interface CertItem {
  abbr: string
  name: string
}

export interface HobbyItem {
  icon: string
  label: string
}

export interface HighlightItem {
  image: string
  title: string
  url: string
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
        '組み込みアプリ大会 世界3位',
        '機械学習サークル東北支部 立ち上げ',
        'SecHack365 修了',
        'SXSW 海外派遣＋ハッカソン',
        'SWイベント運営（Open Source Summit Japan、SRE Next、WBA、Sechack365など）',
        'スマホアプリハッカソン決勝進出＋地上波放送',
        'JAXAスペーススクール 参加',
        'ハッカソン多数出場（Liquid AI Hackathon、PromptGateなど）',
        'カンファレンス運営・ボランティア多数（KubeCon+CloudNativeCon、HackFesなど）',
      ],
      hobbiesLabel: '趣味',
      hobbies: [
        { icon: '📚', label: '読書' },
        { icon: '🏭', label: '工場見学' },
        { icon: '🏃', label: 'フルマラソン' },
        { icon: '⛷️', label: 'スキー' },
        { icon: '⛳', label: 'ゴルフ' },
        { icon: '🍳', label: '料理' },
        { icon: '🎮', label: 'ゲーム' },
        { icon: '📜', label: '資格チャレンジ' },
        { icon: '🍣', label: '回転寿司' },
        { icon: '🪂', label: 'ハンググライダー' },
        { icon: '⛵', label: '船の操縦' },
        { icon: '🚀', label: 'ロケット・ロボット制作' },
        { icon: '🕹️', label: 'ゲーム制作（Unity）' },
      ] satisfies HobbyItem[],
      highlightsLabel: '過去の創作物',
      highlights: [
        { image: '/images/biomod2015.png', title: 'BIOMOD 2015 Harvard Grand Prize（分子ロボコン世界優勝）', url: 'http://biomod.net/winners/2015.html' },
        { image: '/images/sxsw.png', title: 'wabisabi ~listen the melody of things~（SXSW海外派遣）', url: 'http://akisatooo.hatenablog.com/entry/2019/04/07/232752' },
        { image: '/images/spajam2018.png', title: '名探偵ななこ（SPAJAM 2018 優秀賞）', url: 'https://speakerdeck.com/ynntech/spajam-2018-xian-tai-yu-xuan-detective-nanako' },
        { image: '/images/mycmos.jpg', title: '半導体チップ設計・製造（OpenMPW）', url: 'https://akisatooo.hatenablog.com/entry/2024/08/16/233725' },
      ] satisfies HighlightItem[],
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
        'Embedded App Contest World 3rd Place',
        'Founded ML Circle Tohoku Branch',
        'SecHack365 Graduate',
        'SXSW International Dispatch + Hackathon',
        'SW Event Organizer (Open Source Summit Japan, SRE Next, WBA, Sechack365, etc.)',
        'Smartphone App Hackathon Finalist + TV Broadcast',
        'JAXA Space School',
        'Frequent Hackathon Participant (Liquid AI Hackathon, PromptGate, etc.)',
        'Conference Organizing & Volunteering (KubeCon+CloudNativeCon, HackFes, etc.)',
      ],
      hobbiesLabel: 'Hobbies',
      hobbies: [
        { icon: '📚', label: 'Reading' },
        { icon: '🏭', label: 'Factory Tours' },
        { icon: '🏃', label: 'Full Marathon' },
        { icon: '⛷️', label: 'Skiing' },
        { icon: '⛳', label: 'Golf' },
        { icon: '🍳', label: 'Cooking' },
        { icon: '🎮', label: 'Gaming' },
        { icon: '📜', label: 'Certifications' },
        { icon: '🍣', label: 'Conveyor Belt Sushi' },
        { icon: '🪂', label: 'Hang Gliding' },
        { icon: '⛵', label: 'Boat Piloting' },
        { icon: '🚀', label: 'Rocket & Robot Building' },
        { icon: '🕹️', label: 'Game Dev (Unity)' },
      ] satisfies HobbyItem[],
      highlightsLabel: 'Things I’ve Made',
      highlights: [
        { image: '/images/biomod2015.png', title: 'BIOMOD 2015 — Harvard Grand Prize (Molecular Robotics World Champion)', url: 'http://biomod.net/winners/2015.html' },
        { image: '/images/sxsw.png', title: 'wabisabi ~listen the melody of things~ (SXSW dispatch)', url: 'http://akisatooo.hatenablog.com/entry/2019/04/07/232752' },
        { image: '/images/spajam2018.png', title: 'Detective Nanako (SPAJAM 2018 Award)', url: 'https://speakerdeck.com/ynntech/spajam-2018-xian-tai-yu-xuan-detective-nanako' },
        { image: '/images/mycmos.jpg', title: 'Custom Chip Design & Fab (OpenMPW)', url: 'https://akisatooo.hatenablog.com/entry/2024/08/16/233725' },
      ] satisfies HighlightItem[],
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
