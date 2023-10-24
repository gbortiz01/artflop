import React from "react";
import Item from "./item";


const ItemList = ({products}) => {

  return (
    <div className="card-container">
      {products.map((prod) => (
        <Item
          key={prod.id}
          prod={prod}
        
        />
      ))}
    </div>
  );
};

export default ItemList;

