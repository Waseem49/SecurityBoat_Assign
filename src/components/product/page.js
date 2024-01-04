import React from "react";

const Product = (props) => {
  return (
    <div>
      <img src="" alt="" />
      <div>
        <h2>{props.title}</h2>
        <h3>
          <span>Price:{props.price}</span>
          <span>Rating:{props.rating}</span>
        </h3>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default Product;
