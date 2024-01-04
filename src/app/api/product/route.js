import connectDB from "@/config/connectDB";
import { productmodel } from "@/models/productModel";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const reqbody = await req.json();
  await connectDB();
  try {
    await productmodel.create(reqbody);
    return new NextResponse("Product added successfully", { status: 200 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};

// "title": "title",
// "imgUrl": "img",
// "desc": "desc",
// "price:" 101,
// "rating": 3
