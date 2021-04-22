import { BrowserRouter, Route } from "react-router-dom";
import AdminRegister from "./component/auth/AdminRegister";
import CustomerRegister from "./component/auth/CustomerRegister";
import Login from "./component/auth/Login";
import ProductList from "./component/Product/ProductList";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Cart from "./component/Product/Cart";
import Placeorders from "./pages/Placeorders";

// const privateRoutes = [
//   {
//     path: "/admin",
//     component: Auth,
//   },
// ];
const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/register",
    component: Auth,
  },
  // {
  //   path: "/product/all",
  //   component: Product,
  // },
];

function App() {
  // const { isAuthenticated } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/admin/register" exact component={AdminRegister}></Route>
        <Route
          path="/customer/register"
          exact
          component={CustomerRegister}
        ></Route>
        <Route path="/product" exact component={ProductList}></Route>
        <Route path="/cart" exact component={Cart}></Route>
        <Route path="/placeorders" exact component={Placeorders}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
