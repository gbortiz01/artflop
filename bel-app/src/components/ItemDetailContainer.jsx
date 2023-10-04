
import React, {useEffect, useState} from 'react';
import { getItem } from '../AsyncMock';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
  const [producto, setproducto] = useState({});
  const {id} = useParams()
  useEffect (() => {
    getItem(id)
    .then((res) => setproducto(res))
    .catch((error)=> console.log(error))
  },[])

  return (
    <div>
        <ItemDetail producto={producto}/>
    </div>
  );
};

export default ItemDetailContainer;

