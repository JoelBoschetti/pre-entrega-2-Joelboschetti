
import "../Navbar/NavBar.css"
import Cart from "../Cart/Cart"
import carrito from './assets/carrito.png'
import { CartContext } from "../CartContext/CartContext"
import { Link } from "react-router-dom"
import { useContext } from "react" 
const CartWidget = () => {
   
  const {totalQuantity} = useContext(CartContext)
    return(
      <Link to= '/cart' className='CartWidget' style={{display:totalQuantity > 0 ? 'block' : 'none'}} >
                  <img src= {carrito} alt ="carrito" id='logo'/>
                  {totalQuantity}
      </Link>
    )
  
 
}
export default CartWidget