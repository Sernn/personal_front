import { useState, useContext } from "react";
import axios from "../../config/axios";
import localStorageService from "../../services/localStorageService";
import { AuthContext } from "../../contexts/AuthContextProvider";
import { useHistory, Link } from "react-router-dom";

function CustomerRegister() {
  const [input, setInput] = useState({});
  const [error, setError] = useState({});
  const { setIsAuthenticated } = useContext(AuthContext);
  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      if (!value) {
        setError((prev) => ({ ...prev, email: "email is required" }));
      } else if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          value
        )
      ) {
        setError((prev) => ({ ...prev, email: "invalid email address" }));
      } else {
        setError((prev) => ({ ...prev, email: false }));
      }
    }
  };

  const handleSubmit = (e) => {
    const {
      userName,
      password,
      confirmPassword,
      firstName,
      lastName,
      email,
      location,
    } = input;
    e.preventDefault();
    axios.post("/customer/register", {
      userName,
      password,
      confirmPassword,
      firstName,
      lastName,
      email,
      location,
    });
    //   .then((res) => {
    //     localStorageService.setToken(res.data.token);
    //     setIsAuthenticated(true);
    //   });
    alert("[CUSTOMER] Registration complete !");
    history.push("/");
  };

  return (
    <div>
      <h4>Register as customer</h4>
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
        <div>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={input.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="location"
            placeholder="location"
            value={input.location}
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

export default CustomerRegister;
