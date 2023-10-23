import React, { useState, useEffect } from "react";
import StockButton from "./StockButton";
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore"; 

const ItemDetail = ({ onAddToCart }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const db = getFirestore();
                const productRef = doc(db, 'products', id);
        const productDoc = await getDoc(productRef);

        if (productDoc.exists()) {
          const productData = productDoc.data();
          setProducto(productData);
        } else {
          console.log("El producto no existe en la base de datos.");
        }
      } catch (error) {
        console.error("Error al obtener los datos del producto:", error);
      }
    };

    fetchProduct(); 
  }, [id]);

  const handleTerminarCompra = () => {
    if (producto) {
      onAddToCart(producto);
      navigate('/cart');
    }
  };

  if (!producto) {
    return <div>Cargando producto...</div>;
  }

  return (
    <div className="item-detail">
      <h3 className="item-title">Detalle de: {producto.name}</h3>
      <img
        className="item-image"
        width={'300px'}
        src={producto.img}
        alt={producto.name}
      />
      <p className="item-description">{producto.description}</p>
      <p className="item-price">${producto.precio}</p>
      <StockButton initial={1} stock={producto.stock} onAdd={() => {}} />
      <button className="delicate-button" onClick={handleTerminarCompra}>
        Terminar mi compra
      </button>
    </div>
  );
};

export default ItemDetail;
