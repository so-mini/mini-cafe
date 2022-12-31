import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import "./ItemCount.css"

const ItemCount = ({ stock = 10, initial = 1, onAdd}) => {
    const [count, setCount] = useState(initial)

    const minus = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    const plus = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const handleOnAdd = () => { onAdd(count)}

    return (
        <div className="card">
            <div className="card-body">
                <div className="itemCount">
                    <label htmlFor="" style={{ margin:'7px'}}>{count}</label>
                    <Button onClick={minus} style={{ margin:'2px'}} variant="light">-</Button>
                    <Button onClick={plus} style={{ margin:'2px'}} variant="light">+</Button>
                </div>
                <div className="addCartButton">
                    <Button variant="outline-success" onClick={handleOnAdd} style={{ margin:'10px'}}>Add to Cart</Button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;