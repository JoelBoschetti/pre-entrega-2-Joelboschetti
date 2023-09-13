import { useEffect, useState } from "react";
import { getProductById } from "../data/asyncMock"
import ItemDetail from "../ItemListContainer/ItemDetail"






const ItemDetailContainer = () => {
     const [product, setProduct] = useState(null)

     useEffect(()=>{
        getProductById('1')
        .then(response => {
            setProduct(response)
        })
        .catch(error =>{
        console.error(error)
        })
     })

return(
    <div className="ItemDetailContainer">
    <ItemDetail {...product}/>
    </div>
)

};