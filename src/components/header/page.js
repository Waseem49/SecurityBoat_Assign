"use client";
import { MyContext } from "@/context/mycontext";
import Link from "next/link";
import React, { useContext } from "react";

const Header = () => {
  const { cart } = useContext(MyContext);
  return (
    <nav className="navsec">
      <div>Logo</div>
      <div className="cartlog">
        <Link href={"/cart"}>
          <div>Cart:{cart.length}</div>
        </Link>
        <div>Login</div>
      </div>
    </nav>
  );
};

export default Header;
