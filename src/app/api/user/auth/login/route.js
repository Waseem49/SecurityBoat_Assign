import connectDB from "@/config/connectDB";
import { customermodel } from "@/models/customerModel";
import { compare } from "bcryptjs";
import { SignJWT } from "jose";
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const reqbody = await req.json();
  await connectDB();
  try {
    if (!reqbody.email || !reqbody.password) {
      return new NextResponse("Please enter all fields");
    }

    const customer = await customermodel.aggregate([
      { $match: { email: reqbody.email } },
    ]);

    const password = await compare(reqbody.password, customer[0].password);
    if (password) {
      // const token = await sign(
      //   {
      //     email: reqbody.email,
      //     name: reqbody.name,
      //     role: reqbody.role,
      //   },
      //   "securityboat"
      // );
      const token = await new SignJWT({
        email: reqbody.email,
        name: reqbody.name,
        role: reqbody.role,
      })
        .setProtectedHeader({ alg: "HS256" })
        .setExpirationTime("2h")
        .sign(new TextEncoder().encode("secretKey"));

      let response = NextResponse.json(
        { msg: "Login successfull", token, role: reqbody.role },
        { status: 200 }
      );
      response.cookies.set("securitytoken", token, { expiresIn: "7D" });
      return response;
    } else {
      return NextResponse.json({ msg: "Wrong Credentials" }, { status: 500 });
    }
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};

// {
//   "name":"admin",
//   "role":"admin",
//   "email":"admin2@gmail.com",
//   "password":"admin"
// }
