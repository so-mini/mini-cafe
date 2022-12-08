
import { useCartContext } from "../../context/CartContext"

import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({product}) => {

    const { cartList, addToCart} = useCartContext()

    const onAdd = (qty) => {
        console.log('The quantity of products added to the cart is: ', qty)
        addToCart({ ... product, qty })

    }

    console.log(cartList)

    return (
        <div className="container border border-3 border-primary rounded">
            <div className="row">

                < div className="col">
                    <img className="w-50" src={product.photo} alt="Image of the product" />
                    <h2>{product.category}</h2>
                    <h3>{product.name}</h3>
                    <h4>{product.price}</h4>
                </div>

                <div className="col">
                    <ItemCount
                        stock={50}
                        initial={1}
                        onAdd={onAdd}
                    />
                </div>

            </div>
        </div>
    )
}

export default ItemDetail

