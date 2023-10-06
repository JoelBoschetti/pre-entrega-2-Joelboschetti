import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";


const ItemDetail = ({id,title,image,category,price,stock}) => {
  const [quantityAdded, setQuantityAdded] = useState(0)
const {addItem} = useContext(CartContext)
const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)
    const item = {
        id, title, price
    }
    addItem(item, quantity)
}


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
                    {
                        quantityAdded > 0 ? (
                            <link to= '/cart' className="Option">Terminar Compra</link>
                        ): (
                <ItemCount initial={1} stock={stock} onAdd={(handleOnAdd) => console.log ('Cantidad agregada ', ) } />
                )}
                </footer>
            </picture>
        </article>
    )
    };
    export default ItemDetail