import { BrowserRouter, Route } from "react-router-dom";
import AdminRegister from "./component/auth/AdminRegister";
import CustomerRegister from "./component/auth/CustomerRegister";

import ProductList from "./component/Product/ProductList";
// import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Cart from "./component/Product/Cart";
import Placeorders from "./pages/Placeorders";
import AdminLogin from "./component/auth/AdminLogin";
import CustomerLogin from "./component/auth/CustomerLogin";
import ManageProduct from "./pages/ManageProduct";

// const privateRoutes = [
//   {
//     path: "/admin",
//     component: Auth,
//   },
// ];
// const publicRoutes = [
//   {
//     path: "/",
//     component: Home,
//   },
//   {
//     path: "/register",
//     component: Auth,
//   },
//   // {
//   //   path: "/product/all",
//   //   component: Product,
//   // },
// ];

function App() {
  // const { isAuthenticated } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Home}></Route>
        <Route path="/admin/login" exact component={AdminLogin}></Route>
        <Route path="/customer/login" exact component={CustomerLogin}></Route>
        <Route path="/admin/register" exact component={AdminRegister}></Route>
        <Route
          path="/customer/register"
          exact
          component={CustomerRegister}
        ></Route>
        <Route path="/product" exact component={ProductList}></Route>
        <Route path="/manage-product" exact component={ManageProduct}></Route>
        <Route path="/cart" exact component={Cart}></Route>
        <Route path="/placeorders" exact component={Placeorders}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
