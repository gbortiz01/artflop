import { useState } from "react";
import CartContext from "./cart.context";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState({
    products: [],
    total: 0,
  });

  const addItem = (item, quantity) => {
    const { products } = cart;
    const index = products.findIndex((i) => i.item.id === item.id);
    
    if (index > -1) {
    products[index].quantity += quantity;
    } else {
    products.push({
    item,
    quantity,
    });
    }
    
    setCart({
    ...cart,
    products,
    total: getTotal(),
    });
    };
    
    const removeItem = (itemId) => {
    const { products } = cart;
    const index = products.findIndex((i) => i.item.id === itemId);
    
    if (index > -1) {
    products.splice(index, 1);
    }
    
    setCart({
    ...cart,
    products,
    });
    };
    
    const clear = () => {
    setCart((prevValues) => ({
    ...prevValues,
    products: [],
    total: 0,
    }));
    };
    
    const getTotal = () => {
      const { products } = cart;
      return products.reduce(
      (acc, prod) => acc + prod.quantity * prod.item.precio,
      0
      );
      
      };
  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}