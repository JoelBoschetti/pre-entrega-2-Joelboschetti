import "../Navbar/NavBar.css"
import carrito from './assets/carrito.png'
export default function Cartwidget(){
    return(
        <>
        <div>
<span id='carritoNumero' > 0</span>
          <img src= {carrito} alt ="carrito" id='logo'/>
          </div>
 </>
  )
}