import {memo} from 'react'
import Item from '../Item/Item';
import './ItemList.css'


const ItemList = memo( ({products}) => {

  return (

    <div className="productCards">
    {products.map( product => <Item key={product.id} product={product} /> )}
    </div>

  )
}
)

export default ItemList