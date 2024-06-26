import { NextRequest, NextResponse } from "next/server";
import { getGlobalIntl } from "@/middleware";
console.log(getGlobalIntl(), "globalIntl3333");
export async function POST(NextRequest: NextRequest) {
  console.log(getGlobalIntl(), "globalIntl1111");
  const globalIntl = getGlobalIntl();
  globalIntl.formatMessage({ id: "hello" });
  return NextResponse.json({ hello: "world" });
}
