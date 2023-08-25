import { useState } from 'react'
import Navbar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <Navbar />
     <ItemListContainer greeting={'Fin'} />
    </>
  )
}

export default App
