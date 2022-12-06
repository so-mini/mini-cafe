import { productFetch } from '../../helpers/ProductFetch/ProductFetch';
import { useState, useEffect } from 'react';
import ItemList from "../../components/ItemList/ItemList"
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';

const ItemListContainer = ( { greeting } ) => { 
    const [ products, setProduct ] = useState([])
    const [loading, setLoading] = useState(true)

    const { category } = useParams()

    useEffect(()=>{
        if (category) {
            productFetch()
            .then(data => setProduct(data.filter(prod => prod.category === category)))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        } else {
            productFetch()
            .then(data => setProduct(data))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }

    }, [category])
    
    return (
        <div>
            { loading ?
            <div>
                <Spinner style= {{marginLeft:'30px', marginTop:'30px'}} animation="border" role="status" size="sm">
                <span className="visually-hidden">Loading...</span>
                </Spinner>
                <p style={{margin:'30px', marginLeft: '10px', marginTop:'30px', color: 'grey', display:'inline', fontSize:'1.2rem'}}>Loading menu...</p>
            </div>
            :
            <ItemList products = {products}/> }            
        </div>
    )
}

export default ItemListContainer



