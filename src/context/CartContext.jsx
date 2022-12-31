import { useContext, createContext, useState } from "react"

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ( {children} ) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (product) => {
        const inCart = () =>cartList.findIndex(prod => prod.id === product.id)
        const productIndex = inCart()

        if (productIndex !== -1) {
            cartList[productIndex].qty += product.qty
            setCartList([...cartList])
        } else {
            setCartList([... cartList, product])
        }
    }

    const totalPrice = () => cartList.reduce((counter,product) => counter += (product.price * product.qty) , 0)

    const totalQuantity = () => cartList.reduce((counter,product) => counter += product.qty , 0)

    const emptyCart = () => {
        setCartList([])
    }

    const deleteByItem = (id) => {
        setCartList(cartList.filter(prod => prod.id !== id))
    }

    return(
        <CartContext.Provider value = {{
            cartList,
            addToCart,
            emptyCart,
            totalPrice,
            totalQuantity,
            deleteByItem
        }}>

            {children}
        </CartContext.Provider>
    )
}