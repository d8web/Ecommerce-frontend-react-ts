import * as C from "./styles"
import { CategoriesData } from "../../data/HomeData"
import CategoryItem from "../CategoryItem"

const Categories = () => {
    return (
        <C.CategoriesContainer>
            {CategoriesData.map(item => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </C.CategoriesContainer>
    )
}

export default Categories