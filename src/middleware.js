import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const token = await request.cookies.get("securitytoken")?.value;
  const { payload } = await jwtVerify(
    token,
    new TextEncoder().encode("secretKey")
  );

  if (payload.role === "customer") {
    return new NextResponse("You are not authorized");
    // return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/api/product"],
};
