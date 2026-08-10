import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans_JP, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const plexSans = IBM_Plex_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Takao Akimoto — Portfolio",
    template: "%s — Takao Akimoto",
  },
  description:
    "Takao Akimoto のポートフォリオ。Webアプリケーション開発の実績とケーススタディ。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${syne.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body>
        <div className="noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
