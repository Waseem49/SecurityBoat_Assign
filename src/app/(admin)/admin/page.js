"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Admin = () => {
  const [data, setdata] = useState([]);
  console.log(data);
  const getdata = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/user/auth", {
        cache: "no-cache",
      });
      const data = await response.json();
      setdata(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const price = e.target[2].value;
    const rating = e.target[3].value;
    const imgUrl = e.target[4].value;
    const productobject = {
      title: title,
      desc: desc,
      price: price,
      rating: rating,
      imgUrl: imgUrl,
    };

    try {
      const response = await fetch("http://localhost:3000/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productobject),
      });
      const result = await response.json();
      getdata();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    getdata();
  };

  const HandleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/product/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
    }
    getdata();
  };

  return (
    <div className="adminpanal">
      <div>
        {data?.map((el) => (
          <div key={el._id} className="adminpro">
            <Image src={el.imgUrl} width={200} height={150} alt="hv" />
            <h3>{el.title}</h3>
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
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Admin;
