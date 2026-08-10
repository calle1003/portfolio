# Takao Akimoto — Portfolio

個人ポートフォリオサイト（Next.js / App Router）。

## 開発

```bash
npm install
npm run dev
```

http://localhost:3000

## Vercel へのデプロイ

本番 URL: https://portfolio-calle3.vercel.app

1. [Vercel](https://vercel.com) で GitHub リポジトリ `calle1003/portfolio` を Import
2. Framework Preset: **Next.js**（自動検出）
3. 環境変数は不要
4. Deploy

`main` への push で自動デプロイされます。CLI の場合:

```bash
npx vercel --prod
```

## 構成

- `/` … Home（Selected Work）
- `/about` … About
- `/contact` … Contact
- `/work/easel` … チケット販売システムのケーススタディ
- `/projects/easel` … 旧 URL から `/work/easel` へリダイレクト

## 関連リンク

- ポートフォリオ（Vercel）: https://portfolio-calle3.vercel.app
- easel デモ: https://easel-demo-calle3.vercel.app/demo
- easel 公式: https://easel-since2024.com
- 旧 GitHub Pages（参考）: https://calle1003.github.io/portfolio/