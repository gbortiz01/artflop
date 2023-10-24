import React, { useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import  useItems from '../hooks/useItem';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const { products } = useItems(); 

  const producto = products.find((prod) => prod.id === parseInt(itemId));

  useEffect(() => {
  }, []);

  return (
    <div>
      <ItemDetail prod={producto} />
    </div>
  );
};

export default ItemDetailContainer;


