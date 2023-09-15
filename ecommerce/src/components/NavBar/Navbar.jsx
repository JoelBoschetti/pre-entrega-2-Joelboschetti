import '../NavBar/NavBar.css';
import Cartwidget from '../CartWidget/CartWidget';
import logo from '../NavBar/assets/9z.jpg'
import Swal from 'sweetalert2';
import { Link, NavLink } from 'react-router-dom';




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
          <p id='parrafo'> <img src={logo} alt="9z logo" width={50} height={50} /> 9z House      </p><Cartwidget />
          </Link>
   
   <div >
      <ul className='ulsito'>
      <li>
      <NavLink to={`/category/Ropa`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> <button onClick={MostrarAlerta} >Ropa</button> </NavLink>
      </li>
      <li>
      <NavLink to= {`/category/Otros`} className={({isActive}) =>isActive ? 'ActiveOption' : 'Option'}><button onClick={MostrarAlerta}  >Otros</button></NavLink>
      </li>
     
      </ul>
    </div>
    </nav>

      </>
    )
  } 