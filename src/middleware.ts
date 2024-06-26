import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

import { i18n } from "../i18n-config";
import { getIntl, Locale } from "@/library/intl";
import { IntlShape } from "@formatjs/intl";

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  );
  const locale: string = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

export let globalIntl = {} as IntlShape<string>;
export let globalLocale = "" as Locale | string;
export function getGlobalIntl() {
  return globalIntl;
}

export async function middleware(request: NextRequest) {
  const locale = getLocale(request);
  console.log(locale, "locale");
  if ((locale && globalLocale !== locale) || (locale && !globalIntl)) {
    globalLocale = locale;
    globalIntl = await getIntl(locale as Locale | "");
  }
  console.log(globalIntl, "globalIntl222");

  const pathname = request.nextUrl.pathname;

  // It is a must cause seems like "/" is not able to use in [lang] route
  const fallbackPage = "home";

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale: any) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const sanitizedPathname = pathname.startsWith("/")
      ? pathname.substring(1)
      : pathname;

    return NextResponse.redirect(
      new URL(`/${locale}/${sanitizedPathname || fallbackPage}`, request.url)
    );
  }

  const pathnameIsMissingPage = pathname.split("/").slice(2).join("/") === "";

  // Redirect if there is no page
  if (pathnameIsMissingPage) {
    const sanitizedPathname = pathname.endsWith("/")
      ? pathname.substring(0, pathname.length - 1)
      : pathname;

    return NextResponse.redirect(
      new URL(`${sanitizedPathname}/${fallbackPage}`, request.url)
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
};
