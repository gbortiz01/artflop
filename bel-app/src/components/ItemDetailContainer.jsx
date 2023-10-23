import React, { useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { useItems} from '../hooks/useItem';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { products } = useItems(); 

  
  const producto = products.find((prod) => prod.id === parseInt(id));

  useEffect(() => {
    // Puedes realizar cualquier acción adicional si es necesario aquí
  }, []);

  if (!producto) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;


