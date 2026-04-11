/**
 * 自動翻訳スクリプト
 * activity.json の titleEn / descEn が未設定のエントリを
 * Google Translate で自動翻訳して書き込む。
 *
 * 使い方: node scripts/translate.mjs
 */

import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const JSON_PATH = resolve(__dirname, '../content/activity.json')

async function translate(text) {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=ja&tl=en&dt=t&q=${encodeURIComponent(text)}`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Translate API error: ${res.status}`)
  const json = await res.json()
  return json[0].map(seg => seg[0]).join('')
}

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms))
}

async function main() {
  const posts = JSON.parse(readFileSync(JSON_PATH, 'utf8'))
  let changed = 0

  for (const post of posts) {
    const needsTitle = !post.titleEn
    const needsDesc  = !post.descEn

    if (!needsTitle && !needsDesc) continue

    console.log(`[${post.id}] 翻訳中...`)

    if (needsTitle) {
      post.titleEn = await translate(post.title)
      await sleep(300)
    }
    if (needsDesc) {
      post.descEn = await translate(post.desc)
      await sleep(300)
    }

    console.log(`  title: ${post.titleEn}`)
    changed++
  }

  if (changed > 0) {
    writeFileSync(JSON_PATH, JSON.stringify(posts, null, 2) + '\n', 'utf8')
    console.log(`\n✅ ${changed} 件を翻訳して activity.json を更新しました。`)
  } else {
    console.log('✅ 翻訳が必要なエントリはありませんでした。')
  }
}

main().catch(err => {
  console.error('❌ エラー:', err.message)
  process.exit(1)
})
