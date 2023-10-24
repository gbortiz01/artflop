import React, {useContext} from 'react';
import ItemList from './ItemList';
import useItems from '../hooks/useItem';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ greeting }) => {
  const {categoryId} =useParams()
  const { products, isLoading } = useItems(categoryId);


  if (isLoading){
    return <div> Cargando... </div>
  }

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products}  />
    </div>
  );
};

export default ItemListContainer;

