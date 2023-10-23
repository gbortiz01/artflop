import React, { useContext } from "react";
import Item from "./item";
import useItems from "../hooks/useItem"; 
import CartContext from '../context/cart.context';

const ItemList = () => {
  const { products, isLoading } = useItems(); 
  const { addItem } = useContext(CartContext);

  if (isLoading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div className="card-container">
      {products.map((prod) => (
        <Item
          key={prod.id}
          {...prod}
          onAddToCart={() => addItem(prod)}
        />
      ))}
    </div>
  );
};

export default ItemList;

