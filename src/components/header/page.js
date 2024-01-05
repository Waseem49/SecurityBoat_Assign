"use client";
import { MyContext } from "@/context/mycontext";
import Link from "next/link";
import React, { useContext } from "react";

const Header = () => {
  const { cart, token, settoken } = useContext(MyContext);
  const logout = async () => {
    try {
      const response = await fetch(`/api/user/auth/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      // console.log("Login response:", data);
      settoken("");
    } catch (error) {
      console.error("Error during fetch operation:", error.message);
    }
  };
  return (
    <nav className="navsec">
      <Link href={"/"}>
        <div>Logo</div>
      </Link>
      <div className="cartlog">
        <Link href={"/cart"}>
          <div>Cart:{cart.length}</div>
        </Link>
        {token ? (
          <div onClick={logout}>Logout</div>
        ) : (
          <Link href={"/login"}>
            <div>Login</div>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
