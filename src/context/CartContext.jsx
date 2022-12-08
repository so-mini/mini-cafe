import { useContext, createContext, useState } from "react"


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ( {children} ) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (product) => {
        setCartList([... cartList, product])
    }

    //vaciar carrito

    const emptyCart = () => {
        setCartList([])
    }


    //funciones a implementar:
        //eliminar por item
        //cantidad total de productos
        //precio total
        //vaciar carrito

    return(
        <CartContext.Provider value = {{
            cartList,
            addToCart,
            emptyCart
        }}>

            {children}
        </CartContext.Provider>
    )
}