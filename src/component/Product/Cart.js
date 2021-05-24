import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContextProvider";
import axios from "axios";
import { useHistory } from "react-router-dom";
/**@jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export default function Cart() {
  const { cart } = useContext(CartContext);
  const [summary, setSummary] = useState(0);

  const StyledButton = styled.button`
    border-radius: 8px;
    padding: 5px;
    height: 50px;
    width: 200px;
    background-color: #eac3b9;
    color: #fff;
    border: none;
    margin: 15px 15px 15px 0;
  `;

  const summaryPrice = () => {
    if (cart.length > 0) {
      let initV = 0;
      cart.map((itm) => {
        setSummary((initV += itm.price * itm.count));
        return initV;
      });
    }
  };

  useEffect(() => {
    summaryPrice();
  }, [cart]);

  const history = useHistory();

  const handleOrder = async () => {
    await axios.post("/order/", {
      amount: summary,
      status: "PENDING",
      order: cart,
    });

    const location = {
      cart,
      summary,
      pathname: "/placeorders",
    };
    alert(
      "your order has been placed and our admin will contact you by soonest"
    );
    history.push(location);
  };

  return (
    <div>
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
      </div>
      <StyledButton onClick={handleOrder}>Place Orders</StyledButton>
    </div>
  );
}
