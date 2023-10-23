import React, { useContext } from 'react';
import ItemList from './ItemList';
import useItems from '../hooks/useItem';
import CartContext from '../context/cart.context';

const ItemListContainer = ({ greeting }) => {
  const { products, isLoading } = useItems();
  const { addItem } = useContext(CartContext);

  if (isLoading){
    return <div> Cargando... </div>
  }

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} onAddToCart={addItem} />
    </div>
  );
};

export default ItemListContainer;

