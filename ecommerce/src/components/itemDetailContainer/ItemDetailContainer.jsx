import { useEffect, useState } from "react";
import { getProductById } from "../data/asyncMock"
import ItemDetail from "../itemDetail/ItemDetail"
import { useParams } from "react-router-dom";






const ItemDetailContainer = () => {
     const [product, setProduct] = useState(null)
     const {itemId} = useParams()
     useEffect(()=>{
        getProductById(itemId)
        .then(response => {
            setProduct(response)
        })
        .catch(error =>{
        console.error(error)
        })
     }, [itemId])

return(
    <div className="ItemDetailContainer">
    <ItemDetail {...product}/>
    </div>
)

};
export default ItemDetailContainer