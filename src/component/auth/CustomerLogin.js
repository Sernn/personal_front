/**@jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import axios from "../../config/axios";
import { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContextProvider";
import service from "../../services/localStorageService";

function CustomerLogin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const { setIsAuthenticated } = useContext(AuthContext);
  const history = useHistory();

  const StyledButton = styled.button`
    border-radius: 8px;
    padding: 5px;
    height: 50px;
    width: 200px;
    background-color: #eac3b9;
    color: #fff;
    border: none;
  `;

  const validateInput = () => {
    const newError = {};
    if (!userName) newError.userName = "username is requried";
    if (!password) newError.password = "password is required";
    setError(newError);
  };

  const handlerSubmitAsCustomer = async (e) => {
    try {
      e.preventDefault();
      validateInput();

      const res = await axios.post("/customer/login", {
        userName: userName,
        password: password,
      });
      service.setToken(res.data);
      setIsAuthenticated(true);
      alert("your are now login as customer");
      history.push("/product");
    } catch (err) {
      console.log(`err`, err);
    }
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
      <h1>CUSTOMER Login</h1>
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
          onSubmit={handlerSubmitAsCustomer}
          css={css`
            height: 30vh;
            width: 100vw;
            display: flex;
            flex-direction: column;
            align-items: center;
          `}
        >
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            css={css`
              border-radius: 8px;
              padding: 10px;
              height: 50px;
              width: 500px;
              border: none;
              background-color: #d9a88f;
              margin: 10px;
            `}
          />
          {error.email && (
            <span clssName="help-block" style={{ color: "red" }}>
              {error.userName}
            </span>
          )}
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            css={css`
              border-radius: 8px;
              padding: 10px;
              height: 50px;
              width: 500px;
              border: none;
              background-color: #d9a88f;
            `}
          />
          <div
            css={css`
              height: 50vh;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-evenly;
            `}
          >
            <StyledButton type="submit">Login as customer </StyledButton>

            <Link to="/">
              <StyledButton type="submit">Back</StyledButton>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CustomerLogin;
