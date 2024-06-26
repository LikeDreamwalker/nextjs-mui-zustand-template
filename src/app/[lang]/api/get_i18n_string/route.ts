import { NextRequest, NextResponse } from "next/server";
import { getIntl, Locale } from "@/library/intl";

type intlType = any;
let intl = null as intlType | null;
let locale = "en";

export async function POST(
  NextRequest: NextRequest,
  { params }: { params: { lang: Locale } }
) {
  if (intl === null || locale !== params.lang) {
    intl = await getIntl(params.lang);
    locale = params.lang;
  }
  return NextResponse.json({ hello: "world" });
}
