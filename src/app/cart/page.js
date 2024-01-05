"use client";
import { MyContext } from "@/context/mycontext";
import Image from "next/image";
import React, { useContext } from "react";

const Cart = () => {
  const { cart } = useContext(MyContext);
  let price =
    cart?.reduce((acc, el) => {
      acc += +el.price;
      return acc;
    }, 0) || 0;

  return (
    <div className="cart">
      {price === 0 ? (
        <h1 className="cartempty">Cart Empty</h1>
      ) : (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index} className="cartitem">
                <td>
                  <Image src={item.imgUrl} width={80} height={120} />
                </td>
                <td>{item.title}</td>
                <td>${item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="totalprice">
        <h1>Your Total Price:{price}</h1>
      </div>
    </div>
  );
};

export default Cart;
