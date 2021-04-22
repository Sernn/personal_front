import React, { useContext, useEffect, useState } from "react";
/**@jsxImportSource @emotion/react */
import { Link, useHistory } from "react-router-dom";
import axios from "../../config/axios";
import { CartContext } from "../../contexts/CartContextProvider";
import SelectedQuantity from "./SelectedQuantity";
import { css } from "@emotion/react";

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
  const { cart, setCart, setPDs } = useContext(CartContext);

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
      <input size="50" type="text" placeholder="SEARCH PRODUCT HERE" />
      <h1>THIS IS ALL PRODUCT</h1>
      <div
        css={css`
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        `}
      >
        {products?.map((product) => (
          <div
            className="card"
            key={product.id}
            css={css`
              border-radius: 8px;
              box-shadow: 3px 3px 5px 6px #ccc;
              width: 450px;
              height: 300px;
              display: flex;
              flex-direction: column;
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
                  background-color: #5f5f5f;
                  width: 250px;
                  height: 250px;
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
          <button type="submit">Back</button>
        </Link>
        <Link to="/cart">
          <button onClick={checkOut}>Check out</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductList;
