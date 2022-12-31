import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

import ItemList from "../../components/ItemList/ItemList"
import Loading from '../../components/Loading/Loading';


const ItemListContainer = () => { 

    const [products, setProducts] = useState({})
    const [loading, setLoading] = useState(true)

    const { id } = useParams()
    
    useEffect(()=> {
        const db = getFirestore()
        const queryCollection = collection(db,'Products')

        if (id) {

        const queryFilter = query(queryCollection, where('category', '==', id))

        getDocs(queryFilter)
        .then( data => setProducts( data.docs.map( product => ({id: product.id, ...product.data()}) ) ) )
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))

        } else {

            getDocs(queryCollection)
            .then(data => setProducts( data.docs.map(product=> ({id: product.id,...product.data()}))))
            .catch(error=>console.log(error))
            .finally( ()=> setLoading(false) )
        }

    }, [id])
    
    return (
        <div>
            { loading ?
                <Loading /> : <ItemList products = {products}/>
            }

        </div>
    )
}

export default ItemListContainer





