import * as C from "./styles"
import { ProductsData } from "../../data/HomeData"
import ProductItem from "../ProductItem"

const Products = () => {
    return (
        <C.ProductsContainer>
            {ProductsData.map(item => (
                <ProductItem item={item} key={item.id} />
            ))}
        </C.ProductsContainer>
    )
}

export default Products