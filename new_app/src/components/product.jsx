import '../App.css';
export const Product = ({product, addToCart}) => {
   
    return (
        <div className='product' >
                <img src={product?.images[0]} alt={product?.title} height={200} width={150} />
                <p>{product?.title}</p>
                <p>{product?.price}</p>
                <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
    )
}

