// Component Item List Container

/* const ItemListContainer = (obj) => {
    return (
    <div>
        Item List Container
        <label>{obj.saludo}</label>
    </div>
    )
}

export default ItemListContainer */ 

import './ItemListContainer.css'

const ItemListContainer = ( {greeting} ) => {
    return (
        <div className="item-container">
            <h2>Item List Container</h2>
            <p className="landing-greeting">{greeting}</p>
        </div>
    )
}

export default ItemListContainer