import '../NavBar/NavBar.css';
import Cartwidget from '../CartWidget/CartWidget';

import Swal from 'sweetalert2';




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
        
          <p id='parrafo'>9z House      <Cartwidget />
         
   </p>
   <div >
      <ul className='ulsito'>
      <li>
      <button onClick={MostrarAlerta} >jugadores</button></li>
      <li>
      <button onClick={MostrarAlerta} >torneos</button></li>
     <li> <button onClick={MostrarAlerta}>camisetas</button>
      </li>
      </ul>
    </div>
    </nav>

      </>
    )
  } 