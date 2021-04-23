import React, { useEffect } from "react";
import axios from "../config/axios";
import { useLocation } from "react-router-dom";
import { css } from "@emotion/react";

function Placeorders() {
  const location = useLocation();
  const cart = location.cart;
  const summary = location.summary;

  useEffect(() => {}, []);

  return (
    <div>
      <hr />
      {cart?.map((item) => (
        <div key={item.id}>
          <p>Product Name: {item.name}</p>
          <p>Price: {item.price}</p> x<p>{item.count}</p>
          <p>
            Total price for {item.name}: {+item.price * +item.count}
          </p>
          <hr />
        </div>
      ))}
      {summary > 0 ? <p>Summary price : {summary}</p> : null}
      <hr />
      <h2>Upload your slip payment here !</h2>
      <input type="file" />
    </div>
  );
}

export default Placeorders;
