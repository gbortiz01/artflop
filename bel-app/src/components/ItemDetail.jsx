import React, { useContext } from "react";
import StockButton from "./StockButton";
import { useParams } from 'react-router-dom';
import CartContext from "../context/cart.context";
import useItemById from "../hooks/useItemById"

const ItemDetail = () => {
  const params = useParams();
  const { product, isLoading } = useItemById(params.itemId);
  const { addItem } = useContext(CartContext);

  if (isLoading) {
    return <div>Cargando producto...</div>;
  }

  return (
    <div className="item-detail">
      <h3 className="item-title">Detalle de: {product.title}</h3>
      <img
        className="item-image"
        width={'300px'}
        src={product.img}
        alt={product.title}
      />
      <p className="item-description">{product.description}</p>
      <p className="item-price">${product.precio}</p>
      <StockButton initial={0} stock={product.stock} onAdd={addItem} />
    </div>
  );
};

export default ItemDetail;
