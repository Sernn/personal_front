import React, { useContext, useEffect, useState } from "react";
/**@jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Link, useHistory } from "react-router-dom";
import axios from "../../config/axios";
import { CartContext } from "../../contexts/CartContextProvider";
import SelectedQuantity from "./SelectedQuantity";

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

const sortArr = (arr) => {
  let obj = arr.reduce((map, val) => {
    if (!map[`${val.id}`]) {
      map[`${val.id}`] = [];
    }
    map[`${val.id}`].push(val);
    return map;
  }, {});
  for (let prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      obj[prop] = { ...obj[prop][0], count: obj[prop].length };
    }
  }
  return Array.from(new Set(Object.values(obj)));
};

// Public route
const ProductList = () => {
  const [products, setProducts] = useState(null);
  const [selectedPd, setSelectedPd] = useState([]);
  const { setCart, setPDs } = useContext(CartContext);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const data = await axios.get("/product/all");
        setProducts(data.data.products);
        setPDs(data.data.products);
      } catch (err) {
        console.log(`err`, err);
      }
    };
    fetchProductData();
    setCart(sortArr(selectedPd));
  }, [selectedPd, setCart, setPDs]);

  const history = useHistory();

  const checkOut = () => {
    const payload = { products, selectedPd };
    history.push("/cart", [payload]);
  };

  // const StyledCard = styled.div`
  //   border-radius: 8px;
  //   box-shadow: 3px 3px 5px 6px #ccc;
  //   width: 450px;
  //   height: 300px;
  //   display: flex;
  //   flex-flow: column;
  // `;

  return (
    <div>
      <h1
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        THIS IS ALL PRODUCT
      </h1>
      <div
        css={css`
          display: flex;
          flexdirection: column;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          padding: 10px;
          margin: 5px;
        `}
      >
        <div
          css={css`
            display: flex;
            flexdirection: column;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;
            margin: 10px;
          `}
        >
          {products?.map((product) => (
            <div
              className="card"
              key={product.id}
              css={css`
                border-radius: 5px;
                box-shadow: 3px 3px 5px 6px #ccc;
                width: 400px;
                height: 250px;
                display: flex;
                flex-direction: column;
                margin: 10px;
                padding: 5px;
                overflow: scroll;
              `}
            >
              <div
                className="detail"
                css={css`
                  display: flex;
                `}
              >
                <div
                  className="pic"
                  css={css`
                    background-color: grey;
                    width: 150px;
                    height: 150px;
                  `}
                >
                  pic
                </div>
                <div
                  className="content"
                  css={css`
                    display: flex;
                    flex-flow: column;
                  `}
                >
                  <p>
                    <b>name :</b>
                    {product.name}
                  </p>
                  <p>
                    <b>desc :</b>
                    {product.desc.length >= 100
                      ? product.desc.slice(0, 20) + "..."
                      : product.desc}
                  </p>
                  <p>
                    <b>price :</b>
                    {product.price}
                  </p>
                  <p>
                    <b>quantity :</b>
                    {product.quantity}
                  </p>
                </div>
              </div>
              <div>
                <SelectedQuantity
                  selectedPd={selectedPd}
                  setSelectedPd={setSelectedPd}
                  product={product}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <Link to="/">
            <StyledButton type="submit">Back</StyledButton>
          </Link>
          <Link to="/cart">
            <StyledButton onClick={checkOut}>Summary price</StyledButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
