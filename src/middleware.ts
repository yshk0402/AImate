import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { isPrelaunchOperatesX } from "@/lib/releasePhase";

const EXACT_ALLOWED_PATHS = new Set([
  "/",
  "/contact",
  "/robots.txt",
  "/sitemap.xml",
  "/favicon.ico",
  "/manifest.webmanifest",
  "/icon",
  "/apple-icon"
]);

const PREFIX_ALLOWED_PATHS = ["/contact/", "/_next/", "/images/", "/_vercel/", "/icon/", "/apple-icon/"];

function isAllowedPath(pathname: string): boolean {
  return EXACT_ALLOWED_PATHS.has(pathname) || PREFIX_ALLOWED_PATHS.some((prefix) => pathname.startsWith(prefix));
}

export function middleware(request: NextRequest) {
  if (!isPrelaunchOperatesX()) {
    return NextResponse.next();
  }

  if (isAllowedPath(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  return new NextResponse("Not Found", { status: 404 });
}

export const config = {
  matcher: "/:path*"
};
