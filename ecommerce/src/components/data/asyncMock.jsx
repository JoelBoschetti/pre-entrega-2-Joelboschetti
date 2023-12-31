const products = [
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "category": "Otros",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "stock": "57"
    },
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "category": "Ropa",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "stock": "41"
    },
    {
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "category": "Ropa",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "stock": "21"
        
    },
    {
        "id": 4,
        "title": "Mens Casual Slim Fit",
        "price": 15.99,
        "category": "Ropa",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "stock": "16"
    },
    {
        "id": 5,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "category": "Otros",
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        "stock": "12"
        }
    
]
export const getProducts = () => {
 return new Promise((resolve => {
    setTimeout(()=>{
    resolve(products)
},500)
 }))
}

export  const getProductById = (productId) => {
return new Promise((resolve)=> {
    setTimeout(()=>{
        resolve(products.find(prod=>prod.id==productId))

    }, 500)
}
)
};
export  const getProductByCategory = (productCategory) => {
    return new Promise((resolve)=> {
        setTimeout(()=>{
            resolve(products.filter(prod=>prod.category===productCategory))
        }, 500)
    }
    )
    };
