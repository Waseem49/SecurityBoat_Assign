"use client";
import { createContext, useState } from "react";

export const MyContext = createContext();
export const MyContextProvider = ({ children }) => {
  const [cart, setcart] = useState([]);
  const [token, settoken] = useState("");

  return (
    <MyContext.Provider value={{ cart, setcart, token, settoken }}>
      {children}
    </MyContext.Provider>
  );
};
