import { NextRequest, NextResponse } from "next/server";
import { getIntl, Locale } from "@/library/intl";

export async function POST(
  request: NextRequest,
  routeParams: { params: { lang: Locale } }
) {
  const { lang } = routeParams.params;
  console.log(lang, "lang");
  const requestBody = await request.json();
  const texts = requestBody.texts;
  const response: Record<string, string> = {};
  const globalIntl = await getIntl(lang);
  for (let index = 0; index < texts.length; index++) {
    const element = texts[index];
    response[element] = globalIntl.formatMessage({ id: element });
  }
  console.log(response, "result");
  return NextResponse.json({ data: response, code: 200 });
}
