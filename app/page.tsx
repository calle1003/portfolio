import Link from "next/link";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { EASEL, SITE } from "@/lib/site";

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
            <Link className="btn btn-ghost" href="/projects/easel">
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
              <Link href="/projects/easel">
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
              <Link className="text-link" href="/projects/easel">
                ケーススタディを読む →
              </Link>
              <Link className="text-link" href="/projects/easel">
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

        <section id="about" className="section about">
          <div className="section-head">
            <p className="section-kicker">Profile</p>
            <h2>About</h2>
          </div>

          <div className="about-grid">
            <div className="about-main">
              <p className="about-lead">
                Web フロントエンドから API・DB・決済・デプロイまで一貫して扱います。
                見た目だけでなく、運用・権限・障害切り分けまで含めてプロダクトを仕上げることを重視しています。
              </p>

              <dl className="about-spec">
                <div>
                  <dt>role</dt>
                  <dd>Full-stack Web Engineer</dd>
                </div>
                <div>
                  <dt>focus</dt>
                  <dd>本番運用・決済・在庫・管理画面</dd>
                </div>
                <div>
                  <dt>status</dt>
                  <dd>
                    <span className="status-dot" aria-hidden="true" />
                    本番プロダクトを継続開発中
                  </dd>
                </div>
                <div>
                  <dt>github</dt>
                  <dd>
                    <a
                      className="mono-link"
                      href={SITE.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {SITE.githubLabel}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <aside className="about-aside" aria-label="Skills">
              <p className="aside-label">stack / domain</p>
              <ul className="stack about-stack">
                <li>TypeScript</li>
                <li>Next.js</li>
                <li>React</li>
                <li>Prisma</li>
                <li>MySQL</li>
                <li>Stripe</li>
                <li>Docker</li>
                <li>CI/CD</li>
                <li>Auth / RBAC</li>
                <li>Ops</li>
              </ul>
            </aside>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="section-head">
            <p className="section-kicker">Reach out</p>
            <h2>Contact</h2>
            <p>案件のご相談・ご質問はメールでお気軽にどうぞ。</p>
          </div>

          <dl className="about-spec contact-spec">
            <div>
              <dt>email</dt>
              <dd>
                <a className="mono-link" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </dd>
            </div>
            <div>
              <dt>github</dt>
              <dd>
                <a
                  className="mono-link"
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {SITE.githubLabel}
                </a>
              </dd>
            </div>
          </dl>
        </section>
      </main>
      <SiteFooter />
      <RevealOnScroll />
    </>
  );
}
