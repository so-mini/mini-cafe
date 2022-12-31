// Cart 
import { useCartContext } from "../../context/CartContext"
import "./CartWidget.css"

const CartWidget = () => {
    const {totalQuantity} = useCartContext()
    return (
        <div>
            <img src="https://img.icons8.com/dusk/64/null/shopping-cart--v1.png" className="cart-img"/>
            <p className="cart-qty">{totalQuantity() !== 0 && totalQuantity()}</p>
        </div>
    )
}

export default CartWidget