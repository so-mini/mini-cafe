import { useCartContext } from "../../context/CartContext";

const CartContainer = () => {

    const {cartList, emptyCart} = useCartContext()

    return (
        <div>
            {cartList.map(prod => <div key={prod.id}>
                <img src={prod.photo} />
                Name: {prod.name} - Category: {prod.category} - Price: {prod.price} - Qty: {prod.qty}
            </div>)}
            <button onClick={emptyCart}>Empty Cart</button>
        </div>
    )
}

export default CartContainer;
