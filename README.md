# wwlapaki310.github.io

aki310 のポートフォリオサイト。Next.js 16 + Tailwind CSS 4 製。

## 開発

```bash
npm run dev    # 開発サーバー起動 → http://localhost:3000
npm run build  # 本番ビルド
```

---

## 投稿を追加する

`content/activity.json` に以下の形式で追記する。**日本語のみでOK**（EN翻訳は自動）。

```json
{
  "id": "unique-id",
  "type": "portfolio" | "report" | "slide" | "blog",
  "date": "2026-05",
  "title": "タイトル（日本語）",
  "desc": "説明文（日本語）。120文字以内推奨。",
  "image": "/images/ファイル名.png",
  "icon": "🎯",
  "links": [
    { "label": "Demo", "url": "https://..." },
    { "label": "GitHub", "url": "https://..." }
  ],
  "blogUrl": "https://akisatooo.hatenablog.com/entry/..."
}
```

### フィールド説明

| フィールド | 必須 | 説明 |
|---|---|---|
| `id` | ✅ | 一意なID（英数字とハイフン） |
| `type` | ✅ | `portfolio` 開発物 / `report` 体験記 / `slide` スライド / `blog` ブログ |
| `date` | ✅ | `"2026-05"` や `"2026-05-12"` 形式 |
| `title` | ✅ | 日本語タイトル |
| `desc` | ✅ | 日本語説明文 |
| `image` | — | `/images/` 以下の画像パス。なければ `icon` を表示 |
| `icon` | — | 画像がない場合の絵文字 |
| `links` | ✅ | リンク一覧（空配列 `[]` でも可） |
| `blogUrl` | — | ブログ記事のURL。はてなRSSと重複除去に使用 |

初期表示件数は `components/PostsSection.tsx` の `INITIAL_COUNT` で変更できる（現在 12）。

### 画像を追加する場合

画像ファイルを `public/images/` に置く。

```
public/images/my-new-image.png
```

### EN翻訳について

EN ページ（`/en`）では、訪問者のブラウザが自動的に Google Translate API を呼び出して翻訳する。翻訳結果は localStorage にキャッシュされるため、2回目以降は即時表示。

---

## 自己紹介・プロフィールを更新する

`i18n/messages.ts` を編集する。

- **bio**: 自己紹介文
- **certs**: 資格リスト（`{ abbr, name }` 形式）
- **experiences**: 経験リスト
- **hobbies**: 趣味リスト

ENテキストは同ファイルの `en:` 以下を編集。

---

## はてなブログ連携

`lib/hatena.ts` で RSS を取得。

- RSS URL: `https://akisatooo.hatenablog.com/rss`
- 1時間キャッシュ（`revalidate: 3600`）
- `activity.json` に同じ `blogUrl` があるエントリは重複除去される
- 記事の画像はRSS description の `<img>` タグから自動抽出

---

## 技術スタック

| | |
|---|---|
| フレームワーク | Next.js 16 (App Router, Static Export) |
| スタイル | Tailwind CSS 4 |
| 言語 | TypeScript 6 |
| ホスティング | GitHub Pages |
