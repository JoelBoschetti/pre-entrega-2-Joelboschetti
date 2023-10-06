import { Link } from "react-router-dom";
import "../item/item.css"




const Item = ({product}) => {
return(
    <article className="CardItem">
        <header className="Header">
<h2 className="ItemHeader">
    {product.title}
</h2>
        </header>
        <picture>
            <img src={product.image} alt={product.title} className="ItemImg" />
            <section className="sectionsito">
              
                <p className="Info">
                    Categoria: {product.category}
                </p>
                <p className="Info">
                    Precio: ${product.price}
                </p>
                <p className="Info">
                    Stock displonible: {product.stock}
                </p>
               
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${product.id}`} className='Option'>Ver detalle</Link>
            </footer>
        </picture>
    </article>
)
};

export default Item