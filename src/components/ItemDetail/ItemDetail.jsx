import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import Button from 'react-bootstrap/Button';
import "./ItemDetail.css"


const ItemDetail = ({product}) => {

    const [isQty, setIsQty] = useState(false)

    const { addToCart} = useCartContext()

    const onAdd = (qty) => {
        addToCart({ ... product, qty })
        setIsQty(true)
    }

    return (
        <div className="itemDetail container border border-3">
            <div className="row">

                < div className="col">
                    <img className="itemDetailImage" src={product.photo} alt="Image of the product" />
                </div>

                <div className="col">
                    <div className="itemDetailInfo">
                        <h2 className="productName">{product.name} - {product.category} - ${product.price}</h2>
                    </div>

                    {isQty ?
                        <div className="goTo">
                            <Link to="/cart">
                                <Button variant="light" style={{ margin:'5px'}}>Go to cart</Button>
                            </Link>
                            <Link to="/">
                                <Button variant="light" style={{ margin:'5px'}}>Continue Shopping</Button>
                            </Link>
                        </div>

                        :        

                        <ItemCount
                            stock={50}
                            initial={1}
                            onAdd={onAdd}
                        />
                    }       
                </div>

            </div>
        </div>
    )
}

export default ItemDetail