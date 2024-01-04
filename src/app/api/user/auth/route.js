import connectDB from "@/config/connectDB";
import { productmodel } from "@/models/productModel";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  await connectDB();
  try {
    const products = await productmodel.aggregate([{ $match: {} }]);
    return NextResponse.json({ data: products }, { status: 200 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
