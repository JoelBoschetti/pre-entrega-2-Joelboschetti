import products from "../data/asyncMock"
import ItemList from './ItemList'
import { useEffect, useState } from 'react'

const mockAPI = () => {
return new Promise((resolve, reject) => {

    setTimeout(()=> {
    resolve(asynMock);

    },2000);
    });
};
export default function ItemListContainer(){
    const [products, setProducts] = useState([]);
    useEffect(() => {
        mockAPI().then((data) =>setProducts(data));
    }, []);
    return (
        <div className='item-list-container'>
            <ItemList products={products} />
        </div>
    )
}
