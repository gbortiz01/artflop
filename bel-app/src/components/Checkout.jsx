import CartSummaryTable from "./CartSummaryTable";
import { useContext } from "react";
import CartContext from "../context/cart.context";
import useForm from "../hooks/useForm";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import BuyerForm from "../components/BuyerForm";

function Checkout() {
  const { cart } = useContext(CartContext);

  const [values, handleChange] = useForm({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    email2: "",
  });

  if (cart.items.length === 0) return <div>El carrito está vacío</div>;

  const onSubmit = (e) => {
    e.preventDefault();

    for (const key in values) {
      if (values[key] === "") {
        // Agregar manejo de errores de Bootstrap aquí
        alert("Todos los campos son obligatorios");
        return;
      }
    }

    if (values.email !== values.email2) {
      // Agregar manejo de errores de Bootstrap aquí
      alert("Los emails no coinciden");
      return;
    }

    sendOrder();
  };

  const sendOrder = () => {
    const db = getFirestore();

    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, {
      ...cart,
      buyer: {
        name: values.name,
        lastName: values.lastName,
        phone: values.phone,
        email: values.email,
      },
      date: new Date(),
    }).then(({ id }) => {
      // Agregar manejo de éxito de Bootstrap aquí
      alert(`Orden enviada. El ID de la orden es: ${id}`);
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Resumen del carrito</h2>
          <CartSummaryTable cart={cart} />
        </div>
        <div className="col-md-6">
          <h2>Formulario de compra</h2>
          <BuyerForm onSubmit={onSubmit} values={values} handleChange={handleChange} />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
