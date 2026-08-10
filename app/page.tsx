import Link from "next/link";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { EASEL } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <p className="hero-kicker reveal">Portfolio</p>
          <h1 className="hero-name reveal">
            Takao
            <br />
            Akimoto
          </h1>
          <p className="hero-lead reveal">
            本番運用まで見据えた Web アプリケーションを設計・実装します。
          </p>
          <div className="hero-actions reveal">
            <a className="btn btn-primary" href="#work">
              実績を見る
            </a>
            <Link className="btn btn-ghost" href="/work/easel">
              easel 事例
            </Link>
          </div>
        </section>

        <section id="work" className="section">
          <div className="section-head">
            <h2>Selected Work</h2>
            <p>公開できる範囲で、関わったプロダクトをまとめています。</p>
          </div>

          <article className="project-feature">
            <div className="project-meta">
              <span className="tag">Case Study</span>
              <span className="year">2025–</span>
            </div>
            <h3>
              <Link href="/work/easel">
                演劇・公演向けチケット販売システム
              </Link>
            </h3>
            <p>
              Next.js フルスタックで、公演管理・在庫連動の購入フロー・Stripe
              決済・ QR
              チェックイン・管理画面までを実装。本番とは分離したデモ環境でも操作できます。
            </p>
            <ul className="stack">
              <li>Next.js 15</li>
              <li>TypeScript</li>
              <li>Prisma</li>
              <li>MySQL</li>
              <li>Stripe</li>
              <li>Docker</li>
            </ul>
            <div className="project-links">
              <Link className="text-link" href="/work/easel">
                ケーススタディを読む →
              </Link>
              <Link className="text-link" href="/work/easel">
                デモを試す →
              </Link>
              <a
                className="text-link"
                href={EASEL.official}
                target="_blank"
                rel="noopener noreferrer"
              >
                公式サイト →
              </a>
            </div>
          </article>
        </section>
      </main>
      <SiteFooter />
      <RevealOnScroll />
    </>
  );
}
