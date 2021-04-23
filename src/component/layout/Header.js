/**@jsxImportSource @emotion/react */
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContextProvider";
import { css } from "@emotion/react";
import Logo from "./Logo";
import Menu from "./Menu";

function Header(props) {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div
      css={css`
        width: 100vw;
        height: 60px;
        position: fixed;
        display: flex;
        flex-flow: column;
        justify-content: flex-start;
        background-color: #d9a88f;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <Logo />
        {isAuthenticated && <Menu />}
      </div>
      <div
        css={css`
          height: 100%;
        `}
      >
        {props.children}
      </div>
    </div>
  );
}
export default Header;
