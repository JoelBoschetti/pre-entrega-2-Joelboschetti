import { useState } from 'react'
import Navbar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter >
     <Navbar />
     <Routes>
     <Route path='/' element={<ItemListContainer/>}/>
     <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
     <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
     <Route path='*' element={ <h1>404 NOT FOUND</h1>  }/>
     </Routes>
     </BrowserRouter>
     
     
     
    </>
  )
}

export default App
