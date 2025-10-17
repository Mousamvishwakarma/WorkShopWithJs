// Importing useParams hook from React Router
// useParams is used to access the dynamic values from the URL (like product ID)
import { useParams } from "react-router-dom"

// ProductDetail component — shows details of a single product
const ProductDetail = () => {

    // useParams() gives you an object containing all route parameters
    // Example: if the URL is "/product_detail/5", then params = { id: "5" }
    const params = useParams()

    return (
        <div>
            {/* Displaying the product ID taken from the URL */}
            <p>Product Detail {params.id}</p>

        </div>
    )
}

export default ProductDetail
 