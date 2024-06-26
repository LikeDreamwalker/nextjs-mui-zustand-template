import { NextRequest, NextResponse } from "next/server";
// import { getGlobalIntl } from "@/middleware";
// console.log(getGlobalIntl(), "globalIntl3333");

export async function POST(request: NextRequest) {
  console.log(request, "request");
  // const globalIntl = await asyncGetGlobalIntl();
  // globalIntl.formatMessage({ id: "hello" });
  return NextResponse.json({ hello: "world" });
}
