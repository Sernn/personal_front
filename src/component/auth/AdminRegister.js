/**@jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useState, useContext } from "react";
import axios from "../../config/axios";
import { AuthContext } from "../../contexts/AuthContextProvider";
import { useHistory, Link } from "react-router-dom";

function AdminRegister() {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    const { userName, password, confirmPassword, firstName, lastName } = input;
    e.preventDefault();
    axios.post("/admin/register", {
      userName,
      password,
      confirmPassword,
      firstName,
      lastName,
    });

    alert("[ADMIN] Registration complete !");
    history.push("/");
  };

  return (
    <div
      css={css`
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
      `}
    >
      <h1>Register as admin</h1>
      <div
        css={css`
          height: 100vh;
          width: 100vw;
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <form
          onSubmit={handleSubmit}
          css={css`
            height: 30vh;
            width: 100vw;
            display: flex;
            flex-direction: column;
            align-items: center;
          `}
        >
          <div>
            <input
              type="text"
              name="userName"
              placeholder="username"
              value={input.userName}
              onChange={handleInputChange}
              css={css`
                border-radius: 8px;
                padding: 10px;
                height: 30px;
                width: 500px;
                border: none;
                background-color: #d9a88f;
                margin: 10px;
              `}
            />
          </div>
          {error.userName && <span>{error.userName}</span>}
          <div>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={input.password}
              onChange={handleInputChange}
              css={css`
                border-radius: 8px;
                padding: 10px;
                height: 30px;
                width: 500px;
                border: none;
                background-color: #d9a88f;
              `}
            />
          </div>
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="confirmpassword"
              value={input.confirmPassword}
              onChange={handleInputChange}
              css={css`
                border-radius: 8px;
                margin: 5px;
                padding: 10px;
                height: 30px;
                width: 500px;
                border: none;
                background-color: #d9a88f;
              `}
            />
          </div>
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="firstname"
              value={input.firstName}
              onChange={handleInputChange}
              css={css`
                border-radius: 8px;
                margin: 5px;
                padding: 10px;
                height: 30px;
                width: 500px;
                border: none;
                background-color: #d9a88f;
              `}
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="lastname"
              value={input.lastName}
              onChange={handleInputChange}
              css={css`
                border-radius: 8px;
                margin: 5px;
                padding: 10px;
                height: 30px;
                width: 500px;
                border: none;
                background-color: #d9a88f;
              `}
            />
          </div>
          <div
            css={css`
              height: 50vh;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-evenly;
            `}
          >
            <StyledButton type="submit">Register now !</StyledButton>
            <Link to="/">
              <StyledButton type="submit">Back</StyledButton>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminRegister;
