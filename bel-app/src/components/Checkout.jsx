import { useState, useContext } from "react";
import CartContext from "../context/cart.context";
import { addDoc, collection, serverTimestamp, getFirestore } from "firebase/firestore";
import Swal from 'sweetalert2'; 

function Checkout() {
  const [user, setUser] = useState({});
  const [validateEmail, setValidateEmail] = useState('');
  const [orderId, setOrderId] = useState('');
  const { cart, getTotal, clear } = useContext(CartContext);

  const datosComprador = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  const finalizarCompra = (e) => {
    e.preventDefault();

    if (!user.name || !user.phone) {
      return Swal.fire({ 
        icon: 'error',
        title: 'Oops...',
        text: '¡Completa todos los campos!',
      });
    } else {
      let orders = {
        user,
        products: cart,
        total: getTotal(),
        date: serverTimestamp(),
      };

      const db = getFirestore();
      const ventas = collection(db, "orders");
      addDoc(ventas, orders)
        .then((res) => {
          setOrderId(res.id);
          clear()
        })
        .catch((error) => console.log(error));
    }
  }

  return (
    <div>
      {orderId !== ''
      ?<div className="order-confirmation">
      <h2>Felicitaciones! hemos generado su orden con exito</h2>
      <h5>Su id de registro es: {orderId}</h5>
     </div>    
      :<div className="form-container">
      <h2>Formulario de Contacto</h2>
      <form onSubmit={finalizarCompra} id="contact-form" method="post">
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input className="form-input" onChange={datosComprador} type="text" id="nombre" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input className="form-input" onChange={datosComprador} type="text" id="apellido" name="last-name" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Teléfono</label>
          <input className="form-input" onChange={datosComprador} type="number" id="phone" name="phone" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input className="form-input" onChange={datosComprador} type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="repeat-email">Repetir Correo Electrónico</label>
          <input className="form-input" onChange={e => setValidateEmail(e.target.value)} type="email" id="repeat-email" name="email" required />
        </div>
        <div className="form-actions">
          <button className="submit-button" type="submit" disabled={validateEmail !== user.email}>
            Generar orden
          </button>
        </div>
      </form>
    </div>}
    </div>
  );
}

export default Checkout;

