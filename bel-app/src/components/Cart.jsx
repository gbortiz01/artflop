import React, { useContext } from "react";
import CartContext from "../context/cart.context";
import { useNavigate } from "react-router-dom";
import CartSummaryTable from "../components/CartSummaryTable";

function Cart() {
  const { cart, clear } = useContext(CartContext);
  const navigate = useNavigate();

  if (cart.products.length === 0) {
    return (
      <div>
        <p>El carrito está vacío</p>
        <button onClick={() => navigate("/")}>Seguir Comprando</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Resumen del carrito</h2>
      <CartSummaryTable cart={cart} />
      <button onClick={clear}>Vaciar Carrito</button>
      <button onClick={() => navigate("/checkout")}>Terminar mi compra</button>
    </div>
  );
}

export default Cart;

