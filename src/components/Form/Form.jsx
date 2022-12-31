import { useState } from "react"
import { useCartContext } from "../../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore"

import Button from 'react-bootstrap/Button';
import "./Form.css"

const Form = () => {

    const { cartList, emptyCart, totalPrice } = useCartContext()

    const addOrder = () => {
        const order = {}
        order.buyer = dataForm
        order.price = totalPrice()
        order.items = cartList.map(({ id, price, name }) => ({ id, price, name }))

        const db = getFirestore()
        const queryCollection = collection(db, 'orders')

        addDoc(queryCollection, order)
            .then(resp => orderConfirmation(resp))
            .catch(err => console.log(err))
            .finally(() => emptyCart())
    }

    const [dataForm, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        confirmEmail: ''
    })

    const handleOnChange = (e) => {
        setFormData({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    const orderConfirmation = (prod) => {
        alert(`Thank you for your purchase! Your order no. is: ${prod.id}`)
    }

    const formValidation = () => {
        if (dataForm.name !== '' && dataForm.phone !== '' && dataForm.email !== '' && dataForm.email == dataForm.confirmEmail) {
            addOrder(dataForm)
        } else {
            alert('Please make sure all the fields are filled out.')
        }
    }


    return (
        <>
            <h4 style={{ margin: '20px', padding: '30px' }}>Your total is: ${totalPrice()}</h4>
            <h5>Please fill out the form below to proceed with your purchase:</h5>
            <div className="formStyles">
                <form>

                    <label htmlFor="Name">Full name:</label>
                    <input className="inputStyles" type="text"
                        onChange={handleOnChange}
                        name="name"
                        value={dataForm.name}
                        placeholder="Insert your full name"
                    />

                    <label htmlFor="Phone">Phone number:</label>
                    <input className="inputStyles" type="text"
                        onChange={handleOnChange}
                        name="phone"
                        value={dataForm.phone}
                        placeholder="Insert your phone number"
                    />

                    <label htmlFor="Email">Email address:</label>
                    <input className="inputStyles" type="text"
                        onChange={handleOnChange}
                        name="email"
                        value={dataForm.email}
                        placeholder="Insert your email"
                    />

                    <label htmlFor="ConfirmEmail">Confirm your email address:</label>
                    <input className="inputStyles" type="text"
                        onChange={handleOnChange}
                        name="confirmEmail"
                        value={dataForm.confirmEmail}
                        placeholder="Confirm your email address"
                    />

                </form>

                <Button onClick={emptyCart} variant="light" style={{ margin: '5px' }}>Empty Cart</Button>
                <Button onClick={formValidation} variant="light" style={{ margin: '5px' }}>Continue to Payment</Button>
            </div>
        </>
    )
}

export default Form;


