import { useState, useContext } from "react";
import axios from "../../config/axios";
import localStorageService from "../../services/localStorageService";
import { AuthContext } from "../../contexts/AuthContextProvider";
import { useHistory, Link } from "react-router-dom";

function AdminRegister() {
  const [input, setInput] = useState({});
  const [error, setError] = useState({});
  // const { setIsAuthenticated } = useContext(AuthContext);
  const history = useHistory();

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
    // .then((res) => {
    //   localStorageService.setToken(res.data.token);
    //   setIsAuthenticated(true);
    // });
    alert("[ADMIN] Registration complete !");
    history.push("/");
  };

  return (
    <div>
      <h4>Register as admin</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="userName"
            placeholder="username"
            value={input.userName}
            onChange={handleInputChange}
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
          />
        </div>
        <div>
          <input
            type="password"
            name="confirmPassword"
            placeholder="confirmpassword"
            value={input.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="firstname"
            value={input.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            placeholder="lastname"
            value={input.lastName}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Register now !</button>
      </form>
      <Link to="/">
        <button type="submit">Back</button>
      </Link>
    </div>
  );
}

export default AdminRegister;
