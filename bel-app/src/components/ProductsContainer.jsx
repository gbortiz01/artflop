import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import useProductList from '../hooks/useProductList';
const ProductContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ListProduct().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="card-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} /> 
      ))}
    </div>
  );
};

export default ProductContainer;








