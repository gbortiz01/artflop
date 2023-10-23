import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useItems from "../hooks/useItem"; 
import CartContext from '../context/cart.context';

const Item = () => {
  const { products, isLoading } = useItems(); 
  const { addItem } = useContext(CartContext);

  if (isLoading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div>
      {products.map((prod) => (
        <div key={prod.id} className="card" style={{ width: '18rem' }}>
          <img src={prod.img} className="card-img-top" alt={prod.title} />
          <div className="card-body">
            <h5 className="card-title">{prod.title}</h5>
            <p className="card-text">Precio: ${prod.precio}</p>
          </div>
          <div className="delicate-button">
            <Link to={`/item/${prod.id}`}>ver más</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;



