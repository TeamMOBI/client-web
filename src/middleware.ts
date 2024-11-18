import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  const url = request.nextUrl.clone();
  url.pathname = "/login";

  if (!accessToken) NextResponse.redirect(url);

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|login|img|_next/static|_next/image|favicon.ico).*)"],
};
