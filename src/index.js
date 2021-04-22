import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AuthContextProvider from "./contexts/AuthContextProvider";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./contexts/CartContextProvider";
import Header from "./component/layout/Header";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Header>
            <App />
          </Header>
        </BrowserRouter>
      </CartContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
