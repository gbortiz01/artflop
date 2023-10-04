import React, { useEffect, useState } from 'react';
import ItemList from "./ItemList"; 
import { ListProduct } from '../AsyncMock';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greting }) => {
    const [productos, setproductos] = useState([]);
    const {categoryId} = useParams()
    useEffect(() => {
        ListProduct()
            .then((res) => {
                if (categoryId){
                    setproductos(res.filter((item)=>item.category === categoryId))

                }else {
                    setproductos(res)
                }
            })
            .catch((error) => console.log(error));
    }, [categoryId]); 

   
    return (
        <div>
            <h1>{greting}<span>{categoryId && categoryId}</span></h1>
            <ItemList productos={productos} />
        </div>
    );
};

export default ItemListContainer;