"use client";
import { MyContext } from "@/context/mycontext";
import Image from "next/image";
import React, { useContext } from "react";

const Product = (props) => {
  const { cart, setcart } = useContext(MyContext);
  const handleaddtocart = () => {
    setcart([...cart, props]);
  };
  return (
    <div className="product">
      <Image src={props.imgUrl} width={200} height={150} />
      <div>
        <h2>{props.title}</h2>
        <button onClick={handleaddtocart}>Add to cart</button>
        <h3>
          <span>Price:{props.price}</span>
          <span>Rating:{props.rating}</span>
        </h3>
        <p>{props.desc.substring(0, 150)}</p>
      </div>
    </div>
  );
};

export default Product;
