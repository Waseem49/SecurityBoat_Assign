import React from "react";
import Product from "../product/page";
import connectDB from "@/config/connectDB";
import { productmodel } from "@/models/productModel";

// async function getData() {
//   const res = await fetch("http://localhost:3000/api/user/auth");
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

const Productlist = async () => {
  connectDB();
  const products = await productmodel.aggregate([{ $match: {} }]);
  return (
    <main className="productlist">
      {products?.map((el) => {
        return <Product key={el._id} {...el} />;
      })}
    </main>
  );
};

export default Productlist;
