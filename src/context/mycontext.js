"use client";
import { createContext, useState } from "react";

export const MyContext = createContext();
export const MyContextProvider = ({ children }) => {
  const [cart, setcart] = useState([]);
  console.log(cart);
  //   const [token, settoken] = useState("");

  return (
    <MyContext.Provider value={{ cart, setcart }}>
      {children}
    </MyContext.Provider>
  );
};
