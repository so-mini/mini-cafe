import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom' 

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './containers/CartContainer/CartContainer'

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path= '/' element={ <ItemListContainer greeting={'Welcome to Mini Cafe!'} /> } />
          <Route path= '/category/:category' element={ <ItemListContainer/> } />
          <Route path= '/details/:productId' element={ <ItemDetailContainer/> } />
          <Route path= '/cart' element={ <CartContainer/> } />
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
    </BrowserRouter>
  )

}

export default App

