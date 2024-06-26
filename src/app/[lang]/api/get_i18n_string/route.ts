import { NextRequest, NextResponse } from "next/server";
// import { getGlobalIntl } from "@/middleware";
// console.log(getGlobalIntl(), "globalIntl3333");
import { getIntl, Locale } from "@/library/intl";

export async function POST(request: NextRequest, params: { lang: Locale }) {
  console.log(params.lang, "params");
  console.log(request, "request");
  const globalIntl = await getIntl(params.lang);
  const result = globalIntl.formatMessage({ id: "common.app-bar.title" });
  console.log(result, "result");
  return NextResponse.json({ hello: result });
}
