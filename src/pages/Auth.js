import Login from "../component/auth/Login";
import AdminRegister from "../component/auth/AdminRegister";
import CustomerRegister from "../component/auth/CustomerRegister";

function Auth() {
  return (
    <div>
      <div>
        <Login />
        <AdminRegister />
        <CustomerRegister />
      </div>
    </div>
  );
}

export default Auth;
