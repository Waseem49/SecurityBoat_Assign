import connectDB from "@/config/connectDB";
import { productmodel } from "@/models/productModel";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  await connectDB();
  try {
    const deletePro = await productmodel.findByIdAndDelete({ _id: params.id });
    if (deletePro) {
      return new NextResponse("Deleted successfully", { status: 200 });
    } else {
      return new NextResponse("Product not found", { status: 200 });
    }
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};

export const PATCH = async (req, { params }) => {
  const reqbody = await req.json();
  await connectDB();
  try {
    const updatePro = await productmodel.findByIdAndUpdate(
      { _id: params.id },
      reqbody,
      true
    );
    console.log(updatePro);
    if (updatePro) {
      return new NextResponse("Updated successfully", { status: 200 });
    } else {
      return new NextResponse("Product not found", { status: 200 });
    }
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
