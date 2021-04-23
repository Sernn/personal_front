import AdminRegister from "../component/auth/AdminRegister";
import CustomerRegister from "../component/auth/CustomerRegister";

function Auth() {
  return (
    <div>
      <div>
        <AdminRegister />
        <CustomerRegister />
      </div>
    </div>
  );
}

export default Auth;
