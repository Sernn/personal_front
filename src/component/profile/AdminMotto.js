import axios from "../../config/axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContextProvider";

function AdminMotto() {
  const { admin, setAdmin } = useContext(AuthContext);
  const [error, setError] = useState("");

  useEffect(() => {
    const getMe = async () => {
      try {
        const res = await axios.get("/customer/me");
        setAdmin(res.data.admin);
      } catch (err) {
        setError(err.response.data.message);
      }
    };
    getMe();
  }, [setAdmin]);

  return (
    <div>
      <div>
        {error && <div>{error}</div>}
        <h4>{`${admin.firstName} ${admin.lastName}`}</h4>
        <p>{admin.motto}</p>
      </div>
    </div>
  );
}

export default AdminMotto;
