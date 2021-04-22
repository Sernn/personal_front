import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContextProvider";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Cart() {
  const { cart } = useContext(CartContext);
  const [summary, setSummary] = useState(0);

  const summaryPrice = () => {
    if (cart.length > 0) {
      // cart.reduce((acc, cur) => {
      //   setSummary(
      //     Number(acc.price) * Number(acc.count) +
      //       Number(cur.price) * Number(cur.count)
      //   );
      //   return Number(cur) + Number(acc);
      // }, 0);
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
    const res = await axios.post("/order/", {
      amount: summary,
      status: "PENDING",
      order: cart,
    });

    const location = {
      cart,
      summary,
      pathname: "/placeorders",
    };
    alert("your order has been placed");
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
      <button onClick={handleOrder}>Place Orders</button>
    </div>
  );
}
