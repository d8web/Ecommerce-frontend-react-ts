import * as C from "./styles"
import { CategoryType } from "../../types/CategoryType"

type Props = {
    item: CategoryType
}

const CategoryItem = ({ item }: Props) => {
    return (
        <C.CategoryItemContainer>
            <C.ImageCategory src={item.image}/>
            <C.CategoryInfoArea>
                <C.CategoryTitle>{item.title}</C.CategoryTitle>
                <C.CategoryButton>COMPRAR AGORA</C.CategoryButton>
            </C.CategoryInfoArea>
        </C.CategoryItemContainer>
    )
}

export default CategoryItem