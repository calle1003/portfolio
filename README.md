# Takao Akimoto — Portfolio

個人ポートフォリオサイト（Next.js / App Router）。

## 開発

```bash
npm install
npm run dev
```

http://localhost:3000

## Vercel へのデプロイ

1. [Vercel](https://vercel.com) で GitHub リポジトリ `calle1003/portfolio` を Import
2. Framework Preset: **Next.js**（自動検出）
3. 環境変数は不要
4. Deploy

CLI の場合:

```bash
npx vercel
```

本番向け:

```bash
npx vercel --prod
```

## 構成

- `/` … トップ（Work / About / Contact）
- `/projects/easel` … チケット販売システムのケーススタディ
- `/projects/easel.html` … 旧 URL からリダイレクト

## 関連リンク

- easel デモ: https://easel-demo-calle3.vercel.app/demo
- easel 公式: https://easel-since2024.com
