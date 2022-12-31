import Form from "../../components/Form/Form";
import CartList from "../../components/CartList/CartList";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom"
import "./CartContainer.css"

const CartContainer = () => {

    const { cartList } = useCartContext()

    return (

        <div className="cartStyles">
            {cartList.length !== 0 ?
                <div>
                    <div className="cartStyles2">
                        { cartList.map(prod => <CartList key={prod.id} prod={prod} />) }          
                    </div>
                    <Form />
                </div>

                :

                <>
                    <h2 className="emptyCart">Your cart is empty.</h2>
                    <p><Link className="shopNow" to='/'>Shop now</Link></p>
                </>
            }
        </div>

    )
}

export default CartContainer;