import type { Metadata } from "next";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Takao Akimoto のプロフィールとスキルスタック。",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section about">
          <div className="section-head">
            <p className="section-kicker">Profile</p>
            <h1>About</h1>
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
      </main>
      <SiteFooter />
      <RevealOnScroll />
    </>
  );
}
