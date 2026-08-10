import { createHmac } from "crypto";
import { NextRequest, NextResponse } from "next/server";

const DEFAULT_DEMO = "https://easel-demo-calle3.vercel.app";
const TOKEN_TTL_SEC = 5 * 60;

function isCaseStudyReferer(request: NextRequest): boolean {
  const referer = request.headers.get("referer");
  if (!referer) return false;
  try {
    const url = new URL(referer);
    if (url.origin !== request.nextUrl.origin) return false;
    // /work/easel 本体からのみ（enter-demo 自身や他ページは不可）
    return url.pathname === "/work/easel";
  } catch {
    return false;
  }
}

function createToken(secret: string): string {
  const exp = Math.floor(Date.now() / 1000) + TOKEN_TTL_SEC;
  const sig = createHmac("sha256", secret).update(String(exp)).digest("hex");
  return `${exp}.${sig}`;
}

/**
 * ケーススタディ（/work/easel）からの Referer があるときだけ
 * 短寿命トークン付きでデモへリダイレクトする。
 */
export function GET(request: NextRequest) {
  if (!isCaseStudyReferer(request)) {
    return NextResponse.redirect(new URL("/work/easel", request.url), 302);
  }

  const demoBase = (process.env.EASEL_DEMO_URL || DEFAULT_DEMO).replace(
    /\/$/,
    ""
  );
  const key = process.env.DEMO_PORTFOLIO_ACCESS_KEY;
  const target = new URL("/demo", demoBase);

  if (key) {
    target.searchParams.set("portfolio_access", createToken(key));
  }

  return NextResponse.redirect(target.toString(), 302);
}
