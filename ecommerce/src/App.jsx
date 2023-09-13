import { useState } from 'react'
import Navbar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter >
     <Navbar />
     <Routes>
     <Route exact path='/' element={<ItemListContainer/>}/>
     <Route exact path='/category/:Jugadores' element={<ItemListContainer/>}></Route>
     <Route exact path='/category/:Torneos' element={<ItemListContainer/>}></Route>
     <Route exact path='/category/:Camisetas' element={<ItemListContainer/>}></Route>
     </Routes>
     </BrowserRouter>
     
     
     
    </>
  )
}

export default App
