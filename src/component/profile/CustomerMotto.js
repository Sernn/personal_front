import axios from "../../config/axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContextProvider";

function CustomerMotto() {
  const { customer, setCustomer } = useContext(AuthContext);
  const [error, setError] = useState("");

  useEffect(() => {
    const getMe = async () => {
      try {
        const res = await axios.get("/customer/me");
        setCustomer(res.data.customer);
      } catch (err) {
        setError(err.response.data.message);
      }
    };
    getMe();
  }, [setCustomer]);

  return (
    <div>
      <div>
        {error && <div>{error}</div>}
        <h4>{`${customer.firstName} ${customer.lastName}`}</h4>
        <p>{customer.motto}</p>
      </div>
    </div>
  );
}

export default CustomerMotto;
