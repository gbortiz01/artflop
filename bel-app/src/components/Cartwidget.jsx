import { useContext } from "react";
import CartContext from "../context/cart.context";
import { useNavigate } from "react-router-dom";
import CartIcon from "./CartIcon" 

const CartWidget = () => {
  const { cart, getTotal } = useContext(CartContext);
  const navigate = useNavigate();

  const totalQuantity = cart.products ? cart.products.reduce((acc, prod) => (acc += prod.quantity), 0) : 0;

  return (
    <div className="cart-container">
    <div className="cart-info">
      <span className="cart-quantity">Carrito: {totalQuantity}</span>
      <span className="cart-total">Total: ${getTotal(cart.products)}</span>
    </div>

    <button className="cart-button" onClick={() => navigate("/cart")}>
      <CartIcon color="white" />
    </button>
  </div>
);

};

export default CartWidget;




