/**@jsxImportSource @emotion/react */
import { Link, useHistory } from "react-router-dom";
import { css } from "@emotion/react";

function Logo() {
  let history = useHistory();
  const handleLink = () => {
    history.push("/");
    window.location.reload();
  };

  return (
    <div
      css={css`
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 60px;
      `}
    >
      <div
        onClick={handleLink}
        css={css`
          cursor: pointer;
          color: #fff;
          font-weight: bold;
          font-size: 25px;
          padding: 10px;
        `}
      >
        We sell EVERYTHING 🤡
      </div>
    </div>
  );
}

export default Logo;
