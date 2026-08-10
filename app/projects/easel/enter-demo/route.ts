import { NextResponse } from "next/server";

const DEFAULT_DEMO = "https://easel-demo-calle3.vercel.app";

/**
 * ケーススタディからのみデモへ入場する。
 * サーバー側でアクセス鍵を付与してリダイレクトするため、鍵は HTML に出さない。
 */
export function GET() {
  const demoBase = (
    process.env.EASEL_DEMO_URL || DEFAULT_DEMO
  ).replace(/\/$/, "");
  const key = process.env.DEMO_PORTFOLIO_ACCESS_KEY;

  const target = new URL("/demo", demoBase);
  if (key) {
    target.searchParams.set("portfolio_access", key);
  }

  return NextResponse.redirect(target.toString(), 302);
}
