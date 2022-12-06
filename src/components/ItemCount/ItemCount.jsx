import React from "react";
import { useState } from "react";

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
            <div className="card-header">
                <label htmlFor="">{count}</label>
            </div>
            <div className="card-body">
                <button onClick={minus} className="btn btn-outline-primary">-</button>
                <button onClick={plus} className="btn btn-outline-primary">+</button>
                <div className="card-footer">
                    <button className="btn btn-outline-success btn-block" onClick={handleOnAdd}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;