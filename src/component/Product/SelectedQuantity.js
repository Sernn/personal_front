import React, { useState } from "react";
import Placeorders from "../../pages/Placeorders";

export default function SelectedQuantity(props) {
  const { product, selectedPd, setSelectedPd } = props;
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
    setSelectedPd([...selectedPd, product]);
  };

  const decrease = () => {
    setCount(count - 1);

    let newArr = [...selectedPd];
    let filterArr = newArr
      .filter((productOb) => productOb.id === product.id)
      .splice(1);
    let resultArr = newArr.filter((prodOb) => prodOb.id !== product.id);
    setSelectedPd(resultArr.concat(filterArr));
  };

  return (
    <div>
      <button onClick={increase}>+</button>
      {count}
      {count > 0 ? (
        <button onClick={decrease}>-</button>
      ) : (
        <button onClick={decrease} disabled>
          -
        </button>
      )}
    </div>
  );
}
