import { createContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [PDs, setPDs] = useState(null);
  return (
    <CartContext.Provider value={{ cart, setCart, PDs, setPDs }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
