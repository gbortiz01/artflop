import React, { useState, useEffect } from 'react';

const StockButton = ({ stock, onAdd, initial }) => {
  const [productCount, setProductCount] = useState(initial);

  const decrementar = () => {
    if (productCount > 0) {
      setProductCount(productCount - 1);
    }
  };

  const incrementar = () => {
    if (productCount < stock) {
      setProductCount(productCount + 1);
    }
  };

  
  return (
    <div className="stock-button">
      <button className="delicate-button" onClick={decrementar}>Quitar</button>
      <span className="stock-count">{productCount}</span>
      <button className="delicate-button" onClick={incrementar} > Agregar</button>
      <div>
      <button className={`delicate-button ${productCount === 0 ? 'disabled' : '' }`} onClick={() => onAdd(productCount)} >Comprar</button>
      </div>
    </div>
  
  );
};
 
export default StockButton;