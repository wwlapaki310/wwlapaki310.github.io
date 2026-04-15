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

## はてなブログを更新した場合

ブログ記事はビルド時にRSSから取得するため、**ブログを更新しただけではサイトに即時反映されない**。

ただし GitHub Actions が **毎日 09:00 JST に自動リビルド・デプロイ**を実行するため、翌朝には反映される。

すぐに反映したい場合は GitHub リポジトリの **Actions → Deploy to GitHub Pages → Run workflow** で手動実行する。

### はてなブログ連携の仕組み

`lib/hatena.ts` で RSS を取得。

- RSS URL: `https://akisatooo.hatenablog.com/rss`
- `activity.json` に同じ `blogUrl` があるエントリは重複除去される
- 記事の画像はRSS description の `<img>` タグから自動抽出

---

## GitHub Actions でやっていること

`.github/workflows/deploy.yml` で以下を自動実行：

1. `npm ci` — 依存パッケージのインストール
2. `npm run build` — Next.js の静的ビルド（`out/` に出力）。この時点ではてなブログRSSも取得される
3. `out/` を GitHub Pages にデプロイ

**実行タイミング：**
- `master` ブランチへの push 時
- 毎日 09:00 JST（スケジュール自動実行）
- GitHub Actions 画面から手動実行（Run workflow）

---

## アクセス解析（Google Analytics）

計測ID `G-YDEVQ0YYLB` を `app/layout.tsx` に埋め込み済み。デプロイするだけで自動的に計測される。

**確認方法：**
- [Google Analytics](https://analytics.google.com/) にログインして該当プロパティを開く
- リアルタイムレポートでアクセスが計測されているか確認できる

**計測IDを変更したい場合：**
`app/layout.tsx` の `GA_ID` 定数を書き換える。

---

## 技術スタック

| | |
|---|---|
| フレームワーク | Next.js 16 (App Router, Static Export) |
| スタイル | Tailwind CSS 4 |
| 言語 | TypeScript 6 |
| ホスティング | GitHub Pages |
