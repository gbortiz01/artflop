
const CartItems = ( {count = 0} ) => {
    return (
        <div className="position-absolute bg-info-subtle reunded-circle px-2 " style={{ top: 0, ringh:0}}>
            <span style={{fontSize: "10px", color: "black"}}>
                {count}
            </span>
        </div>
    );
};

export default CartItems;