import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import useIsLoading from "../hooks/useLoading";

export default function useItems() {
  const [productos, setItems] = useState([]);
  const { stopLoading, isLoading } = useIsLoading();

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const productosCollection = collection(db, "products"); 

      try {
        const snapshot = await getDocs(productosCollection);

        if (!snapshot.empty) {
          setItems(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        }
      } catch (error) {
        console.error("Error al obtener la lista de productos:", error);
      } finally {
        stopLoading();
      }
    };

    fetchData();
  }, [stopLoading]);

  return { productos, isLoading };
}

