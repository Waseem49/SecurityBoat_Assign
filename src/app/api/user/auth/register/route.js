import connectDB from "@/config/connectDB";
import { customermodel } from "@/models/customerModel";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const reqbody = await req.json();
  await connectDB();
  try {
    if (!reqbody.email || !reqbody.password) {
      return new NextResponse("Please enter all fields");
    }
    const customerExist = await customermodel.aggregate([
      { $match: { email: reqbody.email } },
    ]);
    if (customerExist.length === 0) {
      const hashpassword = await hash(reqbody.password, 5);
      await customermodel.create({
        ...reqbody,
        password: hashpassword,
      });
      return NextResponse.json(
        { msg: "Account created successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { msg: "Please try diffrent Email" },
        { status: 500 }
      );
    }
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
