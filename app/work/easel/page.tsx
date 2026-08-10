import type { Metadata } from "next";
import Link from "next/link";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { EASEL } from "@/lib/site";

export const metadata: Metadata = {
  title: "チケット販売システム",
  description:
    "演劇・公演向けチケット販売 Web アプリのケーススタディ。Next.js / Prisma / Stripe / Docker。",
};

export default function EaselCaseStudyPage() {
  return (
    <>
      <SiteHeader />
      <main className="case">
        <p className="breadcrumb reveal">
          <Link href="/">Portfolio</Link> / <span>Ticket Sales App</span>
        </p>

        <header className="case-hero reveal">
          <p className="hero-kicker">Case Study</p>
          <h1>
            演劇・公演向け
            <br />
            チケット販売システム
          </h1>
          <p className="hero-lead">
            公演情報の公開から購入・決済・当日チェックインまでを、ひとつの Web
            アプリとして設計・実装しました。本番サイトとは分離したデモ環境で、購入フローや管理画面を試せます。
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href={EASEL.enterDemo}>
              デモを試す
            </Link>
            <a
              className="btn btn-ghost"
              href={EASEL.official}
              target="_blank"
              rel="noopener noreferrer"
            >
              公式サイト
            </a>
          </div>
        </header>

        <section className="case-block">
          <h2>Overview</h2>
          <dl className="facts">
            <div>
              <dt>役割</dt>
              <dd>要件定義・設計・実装・デプロイ・運用改善</dd>
            </div>
            <div>
              <dt>期間</dt>
              <dd>2025年6月〜（継続）</dd>
            </div>
            <div>
              <dt>種別</dt>
              <dd>クライアント向けプロダクト（ソース非公開）</dd>
            </div>
            <div>
              <dt>デモ</dt>
              <dd>
                <Link href={EASEL.enterDemo}>easel-demo-calle3.vercel.app</Link>
                <span className="muted"> （このページから入場）</span>
              </dd>
            </div>
            <div>
              <dt>公式HP</dt>
              <dd>
                <a
                  href={EASEL.official}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  easel-since2024.com
                </a>
              </dd>
            </div>
          </dl>
        </section>

        <section className="case-block">
          <h2>Live Demo</h2>
          <p className="case-copy">
            本番（
            <a href={EASEL.official} target="_blank" rel="noopener noreferrer">
              easel-since2024.com
            </a>
            ）とは完全に分離したポートフォリオ用デモです。表示データは架空で、Stripe
            はテストモードのみ使用します。操作手順の詳細はデモ案内ページにも記載しています。デモは
            <strong>このケーススタディ経由でのみ</strong>
            開けます。
          </p>

          <h3 className="case-subhead">試せる機能</h3>
          <ul className="bullets">
            <li>チケット購入フロー（Stripe テストカード）</li>
            <li>
              管理画面（{EASEL.adminPath}：公演・注文・チェックインなど）
            </li>
            <li>エントリーフォーム・お問い合わせ（送信はログのみ）</li>
            <li>ニュース・公演情報の閲覧</li>
          </ul>

          <h3 className="case-subhead">管理画面ログイン</h3>
          <p className="case-copy">
            デモ入場後、下記 URL
            から管理画面を開けます。デモでは二段階認証（OTP）をスキップし、パスワードだけで入れます。
          </p>
          <dl className="code-panel">
            <div>
              <dt>URL</dt>
              <dd>
                {EASEL.demo.replace(/\/$/, "")}
                {EASEL.adminPath}
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>{EASEL.adminEmail}</dd>
            </div>
            <div>
              <dt>Password</dt>
              <dd>{EASEL.adminPassword}</dd>
            </div>
          </dl>

          <h3 className="case-subhead">メール認証（OTP）</h3>
          <p className="case-copy">
            チケット購入・エントリー・お問い合わせでは OTP
            が必要ですが、デモでは実メールは送信されません。確認画面上に6桁コードが表示・自動入力されるので、そのまま「確認する」で進められます。
          </p>

          <h3 className="case-subhead">Stripe テストカード</h3>
          <dl className="code-panel">
            <div>
              <dt>番号</dt>
              <dd>{EASEL.stripeTestCard}</dd>
            </div>
            <div>
              <dt>有効期限</dt>
              <dd>任意の将来月</dd>
            </div>
            <div>
              <dt>CVC</dt>
              <dd>任意の 3 桁</dd>
            </div>
          </dl>

          <h3 className="case-subhead">注意</h3>
          <ul className="bullets">
            <li>入力データはデモ用 DB に保存されます（本番とは無関係）</li>
            <li>
              特商法・プライバシー等の法務ページでは実在の個人情報を表示しません
            </li>
            <li>デモデータは運用側で定期リセットする場合があります</li>
          </ul>
        </section>

        <section className="case-block">
          <h2>Stack</h2>
          <ul className="stack">
            <li>Next.js 15 (App Router)</li>
            <li>React 19</li>
            <li>TypeScript</li>
            <li>Prisma / MySQL 8</li>
            <li>Stripe Checkout + Webhook</li>
            <li>JWT 管理画面認証</li>
            <li>Docker / GitHub Actions</li>
            <li>Tailwind CSS</li>
          </ul>
        </section>

        <section className="case-block">
          <h2>What I built</h2>
          <ul className="bullets">
            <li>公式サイト（Top / About / News 等）とコンテンツ管理</li>
            <li>公演・公演回ごとの在庫と販売ステータス管理</li>
            <li>Stripe Checkout と Webhook による決済完了後のチケット発行</li>
            <li>注文管理、座席割当、QR / 手入力チェックイン</li>
            <li>権限付き管理画面と操作ログ</li>
            <li>本番向け Docker イメージビルドと自動デプロイ</li>
          </ul>
        </section>

        <section className="case-block">
          <h2>Design decisions</h2>
          <div className="decision-list">
            <article>
              <h3>決済は Webhook で確定</h3>
              <p>
                ブラウザの戻りだけでは注文を確定せず、Stripe Webhook
                を正としてチケット発行することで、途中離脱や二重送信に強い形にしています。
              </p>
            </article>
            <article>
              <h3>在庫は公演回単位</h3>
              <p>
                同公演でも回ごとに席種・残数・販売期間が異なる前提で、セッション単位の在庫モデルにしています。
              </p>
            </article>
            <article>
              <h3>本番と検証を分離</h3>
              <p>
                本番データ・本番決済キーはポートフォリオ用途に使いません。デモは別ホスト（Vercel）・架空データ・Stripe
                テストモード・Aiven Free MySQL で構成しています。
              </p>
            </article>
          </div>
        </section>

        <section className="case-block">
          <h2>Note</h2>
          <p className="note">
            公式サイト：
            <a href={EASEL.official} target="_blank" rel="noopener noreferrer">
              easel-since2024.com
            </a>
            ／ デモ：
            <Link href={EASEL.enterDemo}>このページから入場</Link>
            。実公演データ・顧客情報・ソースコードは非公開です。
          </p>
        </section>

        <p className="case-back">
          <Link className="text-link" href="/">
            ← ポートフォリオへ戻る
          </Link>
        </p>
      </main>
      <SiteFooter />
      <RevealOnScroll />
    </>
  );
}
