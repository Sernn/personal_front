import axios from "../../config/axios";
import { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContextProvider";

function Login() {
  const [adminName, setAdminName] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const { setIsAuthenticated } = useContext(AuthContext);
  const history = useHistory();

  const validateInput = () => {
    const newError = {};
    if (!userName) newError.userName = "username is requried";
    if (!password) newError.password = "password is required";
    setError(newError);
  };

  const handlerSubmitAsAdmin = async (e) => {
    try {
      e.preventDefault();
      validateInput();
      const res = await axios.post("/admin/login", {
        userName: userName,
        password: password,
      });
      localStorage.setItem("token", res.data.token);
      setIsAuthenticated(true);
      alert("your are now login as admin");
      history.push("/product");
    } catch (err) {}
  };

  const handlerSubmitAsCustomer = async (e) => {
    try {
      e.preventDefault();
      validateInput();
      const res = await axios.post("/customer/login", {
        userName: userName,
        password: password,
      });
      localStorage.setItem("token", res.data.token);
      setIsAuthenticated(true);
      alert("your are now login as customer");
      history.push("/product");
    } catch (err) {}
  };

  return (
    <div className="container">
      <div className="logo">
        <div className="input">
          <h4>Login</h4>
          <form onSubmit={handlerSubmitAsAdmin}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={adminName}
              onChange={(e) => setAdminName(e.target.value)}
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
            />
            <button type="submit">Login as admin </button>
          </form>
        </div>
      </div>
      <form onSubmit={handlerSubmitAsCustomer}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
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
        />
        <button type="submit">Login as customer </button>
      </form>
      <Link to="/">
        <button type="submit">Back</button>
      </Link>
    </div>
  );
}

export default Login;
