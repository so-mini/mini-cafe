import { productFetch } from '../../helpers/ProductFetch/ProductFetch';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import ItemDetail from '../../components/ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const {productId} = useParams()

    useEffect(()=>{
        productFetch()
        .then(respProd => setProduct(respProd.find(prod => prod.id === productId)))
        .catch(err => console.log(err))
    })
    
    return(
        <ItemDetail product={product} />
    )
}

export default ItemDetailContainer