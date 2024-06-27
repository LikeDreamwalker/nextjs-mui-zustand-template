import { NextResponse, NextRequest } from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { i18n } from "../i18n-config";

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales = [...i18n.locales]; // Copy to mutable array if necessary
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  );
  const locale: string = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

let cachedPathLocale = "";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const fallbackPage = "home";
  const userNetworkLocale = getLocale(request);

  // For the i18n request, we always based on the cached locale
  if (request.nextUrl.pathname.startsWith("/api/get_i18n_string")) {
    const finalPathLocale =
      cachedPathLocale || userNetworkLocale || i18n.defaultLocale;
    const sanitizedPathname = pathname.startsWith("/")
      ? pathname.substring(1)
      : pathname;

    return NextResponse.redirect(
      new URL(
        `/${finalPathLocale}/${sanitizedPathname || fallbackPage}`,
        request.url
      )
    );
  }
  // For normal API, we do nothing
  if (request.nextUrl.pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // For normal scenarios, we redirect the related pages to locale/page
  // Get current path locale
  const currentPathLocale =
    i18n.locales.find(
      (locale: any) =>
        pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    ) || "";
  console.log(currentPathLocale, "currentPathLocale");
  const finalPathLocale =
    currentPathLocale || userNetworkLocale || i18n.defaultLocale;
  cachedPathLocale = finalPathLocale;
  const needRedirect = finalPathLocale !== currentPathLocale;
  // Redirect if there is no locale
  if (needRedirect) {
    const sanitizedPathname = pathname.startsWith("/")
      ? pathname.substring(1)
      : pathname;

    return NextResponse.redirect(
      new URL(
        `/${finalPathLocale}/${sanitizedPathname || fallbackPage}`,
        request.url
      )
    );
  }

  // Redirect if there is no page
  const pathnameIsMissingPage = pathname.split("/").slice(2).join("/") === "";
  if (pathnameIsMissingPage) {
    const sanitizedPathname = pathname.endsWith("/")
      ? pathname.substring(0, pathname.length - 1)
      : pathname;
    return NextResponse.redirect(
      new URL(`${sanitizedPathname}/${fallbackPage}`, request.url)
    );
  }

  return NextResponse.next({
    request: {
      // headers: requestHeaders,
    },
  });
}

export const config = {
  // Matcher ignoring `/_next/`
  matcher: ["/((?!_next/static|_next/image|images|favicon.ico).*)"],
};
