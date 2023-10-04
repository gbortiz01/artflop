import React from "react";
import Item from "./item";


const ItemList = ({ productos }) => {
    return (
        <div className="card-container">
            {productos.map((prod) => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList;
