import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALES = ["id", "en"] as const;
type Locale = (typeof LOCALES)[number];
const DEFAULT_LOCALE: Locale = "id";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already starts with a supported locale (/id or /en)
  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    // Extract locale and set/refresh cookie
    const currentLocale = pathname.split("/")[1] as Locale;
    const response = NextResponse.next();
    response.cookies.set("NEXT_LOCALE", currentLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: "lax",
    });
    return response;
  }

  // Determine preferred locale from cookie, accept-language header, or fallback to DEFAULT_LOCALE
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value as Locale | undefined;
  let targetLocale: Locale = DEFAULT_LOCALE;

  if (cookieLocale && LOCALES.includes(cookieLocale)) {
    targetLocale = cookieLocale;
  } else {
    const acceptLang = request.headers.get("accept-language") || "";
    if (acceptLang.toLowerCase().includes("id")) {
      targetLocale = "id";
    } else if (acceptLang.toLowerCase().includes("en")) {
      targetLocale = "en";
    }
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${targetLocale}${pathname === "/" ? "" : pathname}`;

  const response = NextResponse.redirect(url);
  response.cookies.set("NEXT_LOCALE", targetLocale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: [
    // Skip static assets, API routes, and standard public metadata files
    "/((?!api|_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|manifest.webmanifest|robots.txt|sitemap.xml|opengraph-image.jpg|twitter-image.jpg|.*\\.(?:jpg|jpeg|gif|png|svg|ico|webp|mp4|webm|ogg|mp3|wav|json)).*)",
  ],
};
