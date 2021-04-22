/**@jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

function Home() {
  const StyledButton = styled.button`
    border-radius: 8px;
    padding: 5px;
    height: 50px;
    width: 200px;
    background-color: #eac3b9;
    color: #fff;
    border: none;
  `;

  return (
    <div
      css={css`
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <h1>Welcome to "🍑 Kai TOOD!!"</h1>
        <h4>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam,
          rem.
        </h4>
      </div>
      <Link to="/product">
        <StyledButton
          css={css`
            width: 71.5vw;
            color: #fff;
            font-weight: bold;
            background-color: #b06660;
            font-size: 40px;
            height: 80px;
          `}
          type="submit"
        >
          👀 CHECK OUR PRODUCT HERE!!!!
        </StyledButton>
      </Link>
      <div
        css={css`
          margin: 10px;
          padding: 10px;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
        `}
      >
        <Link to="/Login">
          <StyledButton type="submit">LOGIN</StyledButton>
        </Link>
        <Link to="/admin/register">
          <StyledButton type="submit">REGISTER AS ADMIN</StyledButton>
        </Link>
        <Link to="/customer/register">
          <StyledButton type="submit">REGISTER AS CUSTOMER</StyledButton>
        </Link>
      </div>
    </div>
  );
}

export default Home;
