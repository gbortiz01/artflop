import React, { useContext } from "react";
import { Link } from 'react-router-dom';


const Item = ({prod}) => {
  return (
    <div>
          <div key={prod.id} className="card" style={{ width: '18rem' }}>
          <img src={prod.img} className="card-img-top" alt={prod.title} />
          <div className="card-body">
            <h5 className="card-title">{prod.title}</h5>
            <p className="card-text">Precio: ${prod.precio}</p>
          </div>
          <div className="delicate-button">
          <Link to={`/item/${prod.id}`}>Ver detalle</Link>
          </div>
        </div>
    </div>
  );
};

export default Item;



