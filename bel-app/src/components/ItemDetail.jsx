import React from "react";
import StockButton from "./StockButton";

const ItemDetail = ({ producto, onAdd }) => {
  return (
    <div className="item-detail">
      <h3 className="item-title">Detalle de: {producto.name}</h3>
      <img
        className="item-image"
        width={'300px'}
        src={producto.img}
        alt={producto.name}
      />
      <p className="item-description">{producto.description}</p>
      <p className="item-price">${producto.precio}</p>
      <StockButton initial={1} stock={producto.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
