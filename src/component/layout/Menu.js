/**@jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import localStorageService from "../../services/localStorageService";
import { AuthContext } from "../../contexts/AuthContextProvider";
import { useContext } from "react";
import { css } from "@emotion/react";

function Menu() {
  const history = useHistory();
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorageService.clearToken();
    setIsAuthenticated(false);
    history.push("/");
    window.location.reload();
  };

  return (
    <ul
      css={css`
        display: flex;
        justify-content: space-evenly;
        list-style-type: none;
      `}
    >
      <li>
        <Link
          to="/"
          onClick={handleLogout}
          css={css`
            text-decoration: none;
            font-size: 14px;
            color: #fff;
            padding: 10px;
          `}
        >
          Logout
        </Link>
      </li>
    </ul>
  );
}

export default Menu;
