import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import useIsLoading from "./useLoading";

export default function useItems() {
  const [products, setProducts] = useState([]);
  const { stopLoading, isLoading } = useIsLoading();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const db = getFirestore();
        const itemsCollection = collection(db, "products");
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
  }, [stopLoading]);

  return { products, isLoading };
}
