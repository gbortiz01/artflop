import { useEffect, useState } from "react";
import { ListProduct } from "../AsyncMock"; 

export const useProductList = () => {
  const [products, setProducts] = useState([]);
  const [stock, setStock] = useState(0);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productList = await ListProduct();
        const stockValue = 5; 
        setProducts(productList);
        setStock(stockValue); // Actualiza el estado del stock
      } catch (error) {
        console.error("Error al obtener la lista de productos:", error);
      }
    };

    fetchProducts();
  }, []);

  return {
    products
  };
};

export default useProductList;
