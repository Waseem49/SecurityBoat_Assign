"use client";
import { MyContext } from "@/context/mycontext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";

const Login = () => {
  const router = useRouter();
  const { settoken } = useContext(MyContext);
  const [formData, setFormData] = useState({
    name: "",
    role: "customer",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/user/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.msg === "Login successfull") {
        settoken(data.token);
        if (data.role === "admin") {
          router.push("/admin");
        } else {
          router.push("/");
        }
      } else {
        alert("Login failed, please try again");
      }
    } catch (error) {
      console.error("Error during fetch operation:", error.message);
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Role:
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="customer">Customer</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}>
          <button type="submit">Login</button>
          <span className="registerspan">
            not have account{" "}
            <Link href={"/register"} style={{ color: "black" }}>
              Register
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
