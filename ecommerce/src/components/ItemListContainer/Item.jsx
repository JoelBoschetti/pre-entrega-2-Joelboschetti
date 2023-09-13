export default function Item ({product}) {
    return(
        <a href="#" className="item">
            <img src={product.image} width={125} alt="" />
            <h2> {product.title} </h2>
            <span>${product.price} </span>
        </a>
    )
}