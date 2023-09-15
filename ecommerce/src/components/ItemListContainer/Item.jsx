import { Link } from "react-router-dom";
import "../ItemListContainer/item.css"




const Item = ({id,title,image,category,price,stock}) => {
return(
    <article className="CardItem">
        <header className="Header">
<h2 className="ItemHeader">
    {title}
</h2>
        </header>
        <picture>
            <img src={image} alt={title} className="ItemImg" />
            <section className="sectionsito">
              
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock displonible: {stock}
                </p>
               
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
            </footer>
        </picture>
    </article>
)
};

export default Item