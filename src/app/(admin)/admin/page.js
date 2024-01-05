"use client";
import Image from "next/image";
import React from "react";
async function getdata() {
  try {
    const response = await fetch("http://localhost:3000/api/user/auth", {
      cache: "no-cache",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
const Admin = async () => {
  let { data } = await getdata();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[0].value;
    const price = e.target[0].value;
    const rating = e.target[0].value;
    const productobject = {
      title: title,
      desc: desc,
      price: price,
      rating: rating,
    };
    console.log(productobject);
    try {
      const response = await fetch("http://localhost:3000/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productobject),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  const HandleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/product/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="adminpanal">
      <div>
        {data?.map((el) => (
          <div key={el._id} className="adminpro">
            <Image src={el.imgUrl} width={200} height={150} alt="hv" />
            <h1>{el.title}</h1>
            <button onClick={() => HandleDelete(el._id)}>Delete</button>
          </div>
        ))}
      </div>

      <div className="addform">
        <h2>Add Item</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Description" />
          <input type="text" placeholder="Price" />
          <input type="text" placeholder="Rating" />
          <input type="text" placeholder="ImgUrl" />
          <input type="submit" name="" />
        </form>
      </div>
    </div>
  );
};

export default Admin;
