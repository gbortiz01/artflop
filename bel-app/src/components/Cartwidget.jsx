import { useContext } from "react";
import CartContext from "../context/cart.context";
import { useNavigate } from "react-router-dom";

const CartWidget = () => {
  const { cart, getTotal } = useContext(CartContext);
  const navigate = useNavigate();

  const totalQuantity = cart.products ? cart.products.reduce((acc, curr) => acc + curr.quantity, 0) : 0;

  return (
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <span>
          Elementos en el carrito: {totalQuantity}
        </span>
        <span>Total: ${getTotal(cart.products)}</span>
      </div>

      <button className="btn btn-primary" onClick={() => navigate("/cart")}>
        Ver carrito
      </button>
    </div>
  );
};

export default CartWidget;




