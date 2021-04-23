/**@jsxImportSource @emotion/react */
import axios from "../../config/axios";
import { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContextProvider";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

function AdminLogin() {
  const [adminName, setAdminName] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
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
    if (!adminName) newError.userName = "username is requried";
    if (!adminPassword) newError.password = "password is required";
    setError(newError);
  };

  const handlerSubmitAsAdmin = async (e) => {
    try {
      e.preventDefault();
      validateInput();
      const res = await axios.post("/admin/login", {
        userName: adminName,
        password: adminPassword,
      });
      localStorage.setItem("token", res.data.token);
      setIsAuthenticated(true);
      alert("your are now login as admin");
      history.push("/product");
    } catch (err) {}
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
      <h1>ADMIN Login</h1>

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
          onSubmit={handlerSubmitAsAdmin}
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
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
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
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
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
          <div
            css={css`
              height: 50vh;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-evenly;
            `}
          >
            <StyledButton type="submit">Login as admin </StyledButton>
            <Link to="/">
              <StyledButton type="submit">Back</StyledButton>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
