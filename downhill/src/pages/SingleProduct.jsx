import { useParams } from "react-router-dom"

function SingleProduct(){
    return <div>
        {console.log(useParams)}
    </div>
}

export default SingleProduct;