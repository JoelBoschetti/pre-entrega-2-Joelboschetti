import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({id,title,image,category,price,stock}) => {
    return(
        <article className="CardItem">
            <header className="Header">
    <h2 className="ItemHeader">
        {title}
    </h2>
            </header>
            <picture>
                <img src={image} alt={title} className="ItemImg" />
                <section>
                    <p className="Info">
                        Categoria: {category}
                    </p>
                    <p className="Info">
                        precio: ${price}
                    </p>
                </section>
                <footer className="ItemFooter">
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log ('Cantidad agregada ', quantity) } />
                </footer>
            </picture>
        </article>
    )
    };
    export default ItemDetail