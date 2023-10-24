import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import useIsLoading from "./useLoading";

export default function useItems(category) {
  const [products, setProducts] = useState([]);
  const { stopLoading, startLoading, isLoading } = useIsLoading();
  
  useEffect(() => {
    const fetchProducts = async () => {
      startLoading()
      try {
        const db = getFirestore();
        const itemsCollection = category ? query(collection(db, "products"), where("category", "==", category)): collection(db, "products");
        const snapshot = await getDocs(itemsCollection);

        if (!snapshot.empty) {
          const productsData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setProducts(productsData);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        stopLoading();
      }
    };

    fetchProducts();
  }, [category]);

  return { products, isLoading };
}