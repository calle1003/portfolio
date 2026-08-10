import type { Metadata } from "next";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "案件のご相談・ご質問はメールでどうぞ。",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section contact">
          <div className="section-head">
            <p className="section-kicker">Reach out</p>
            <h1>Contact</h1>
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
