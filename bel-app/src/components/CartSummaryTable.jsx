import React from "react";

function CartSummaryTable({ cart }) {
  if (!cart || !cart.products) {
    return <div>No hay productos en el carrito.</div>;
  }

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Precio Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.products.map(({ product, quantity }) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{quantity}</td>
              <td>${product.price}</td>
              <td>${product.price * quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartSummaryTable;


