import React from "react";
/**@jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContextProvider";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";

function ManageProduct() {
  const [input, setInput] = useState({});
  const [error, setError] = useState({});
  const { setIsAuthenticated } = useContext(AuthContext);
  const history = useHistory();

  const StyledButton = styled.button`
    border-radius: 8px;
    margin: 5px;
    padding: 5px;
    height: 50px;
    width: 200px;
    background-color: #eac3b9;
    color: #fff;
    border: none;
  `;
  const [toggleAdd, setToggleAdd] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddSubmit = (e) => {
    const { name, desc, price, quantity } = input;
    // e.preventDefault();
    axios.post("/product/create", {
      name,
      desc,
      price,
      quantity,
    });
    history.push("/manage-product");
    alert("Product added successfully");
  };

  return (
    <div>
      <div>
        <h1>Manage product page</h1>
        {!toggleAdd && (
          <StyledButton
            onClick={() => {
              setToggleAdd(!toggleAdd);
            }}
          >
            ADD PRODUCT
          </StyledButton>
        )}
        {toggleAdd && (
          <div>
            <form onSubmit={handleAddSubmit}>
              <StyledButton>ADD PRODUCT</StyledButton>
              <br />
              <input
                type="text"
                name="name"
                placeholder="name"
                value={input.name}
                onChange={handleInputChange}
              />
              <br />
              <input
                type="text"
                name="desc"
                placeholder="desc"
                value={input.desc}
                onChange={handleInputChange}
              />

              <br />
              <input
                type="number"
                name="price"
                placeholder="price"
                value={input.price}
                onChange={handleInputChange}
              />
              <br />
              <input
                type="number"
                name="quantity"
                placeholder="quantity"
                value={input.quantity}
                onChange={handleInputChange}
              />
              <br />
              <button>SUBMIT</button>
            </form>
          </div>
        )}
        <br />
        <StyledButton> EDIT PRODUCT</StyledButton>
        <br />
        <StyledButton> DELETE PRODUCT</StyledButton>
      </div>
    </div>
  );
}

export default ManageProduct;
