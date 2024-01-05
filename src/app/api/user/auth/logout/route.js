import connectDB from "@/config/connectDB";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  await connectDB();
  try {
    let response = NextResponse.json(
      { msg: "Logout successfull"},
      { status: 200 }
    );
    response.cookies.set("securitytoken", null);
    return response;
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
