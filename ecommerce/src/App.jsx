import { useState } from 'react'
import Navbar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer"
import { CartProvider } from './components/CartContext/CartContext'
import Cart from './components/Cart/Cart'
import {collection, getDocs, getFirestore} from "firebase/firestore"
import Checkout from './components/Checkout/checkout'


function App() {
 const [products, setProducts] = useState(0)
const db = getFirestore();
const productsRef = collection(db, "productos");
getDocs(productsRef).then((snapshot) =>{
setProducts(
  snapshot.docs.map((doc)=>{
    return {id: doc.id, ...doc.data()};
  })
)
})


  return (
    <>
     <BrowserRouter >
     <CartProvider>
     <Navbar />
     <Routes>
     <Route path='/' element={<ItemListContainer/>}/>
     <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
     <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/checkout' element={<Checkout/>}/>
     <Route path='*' element={ <h1>404 NOT FOUND</h1>  }/>
     </Routes>
     </CartProvider>
     </BrowserRouter>
     
     
     
    </>
  )
}

export default App
