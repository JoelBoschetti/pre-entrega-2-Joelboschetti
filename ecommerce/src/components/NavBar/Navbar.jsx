import '../NavBar/NavBar.css';
import Cartwidget from '../CartWidget/CartWidget';
import logo from '../NavBar/assets/9z.jpg'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';




export default function NavBar() {
  const Texto = ({text}) => {
    return(
        <div>
    {text}
        </div>
    )
    };
  const MostrarAlerta = (e) => {
    Swal.fire({

    
      text: `Estas siendo redirigido a ${e.target.textContent}`,
      imageUrl:'https://ih1.redbubble.net/image.1743884532.6809/st,small,507x507-pad,600x600,f8f8f8.jpg',    
     });
    
     };
    return (
    <>
        <nav className='navBar' >
        <Link to="/">
          <p id='parrafo'> <img src={logo} alt="9z logo" width={50} height={50} /> 9z House      <Cartwidget /></p>
          </Link>
   
   <div >
      <ul className='ulsito'>
      <li>
      <Link to="/Jugadores"> <button onClick={MostrarAlerta} >Jugadores</button> </Link>
      </li>
      <li>
      <Link to="/Torneos"><button onClick={MostrarAlerta} >Torneos</button></Link>
      </li>
     <li> 
     <Link to="Camisetas">  <button onClick={MostrarAlerta}>Camisetas</button> </Link>
      </li>
      </ul>
    </div>
    </nav>

      </>
    )
  } 