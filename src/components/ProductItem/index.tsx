import * as C from "./styles"
import { ShoppingCartOutlined, Search, FavoriteBorderOutlined } from "@material-ui/icons"
import { ProductType } from "../../types/ProductType"

type Props = {
    item: ProductType
}

const ProductItem = ({ item }: Props) => {
    return (
        <C.ProductContainer>
            <C.Circle/>
            <C.ImageProduct src={item.image} />
            <C.InfoProductContainer>
                <C.IconContainer>
                    <ShoppingCartOutlined/>
                </C.IconContainer>
                <C.IconContainer>
                    <Search/>
                </C.IconContainer>
                <C.IconContainer>
                    <FavoriteBorderOutlined/>
                </C.IconContainer>
            </C.InfoProductContainer>
        </C.ProductContainer>
    )
}

export default ProductItem