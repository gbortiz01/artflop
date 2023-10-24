import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import useIsLoading from "./useLoading";

export default function useItemById(id) {
  const [product, setProduct] = useState(null);
  const { stopLoading, isLoading } = useIsLoading();

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "products", id);

    getDoc(itemRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct({
            id: snapshot.id,
            ...snapshot.data(),
          });
        } else {
          console.log("No existe el documento");
        }
      })
      .catch((error) => {
        console.error("Error al obtener el documento:", error);
      })
      .finally(() => {
        stopLoading();
      });
  }, [id, stopLoading]);

  return {
    product,
    isLoading,
  };
}
