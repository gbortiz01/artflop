import CartIcon from "./CartIcon";
import CartItems from "./CartItem";

const CartContiner = () => {
    return (
        <div className="bg-info-subtle rounded-circle p-3 position-relative"> 
            <CartIcon/>
            <CartItems count={2}/>
        </div>
    );    
};

export default CartContiner;