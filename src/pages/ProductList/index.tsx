import * as C from "./styles"
import Announcement from "../../components/Announcement"
import Navbar from "../../components/Navbar"
import Products from "../../components/Products"
import Newsletter from "../../components/Newsletter"
import Footer from "../../components/Footer"

const ProductsList = () => {
    return (
        <>
            <Navbar/>
            <Announcement/>
            <C.FilterTitle>Placa mãe</C.FilterTitle>
            <C.ProductContainer>
                <C.FilterContainer>
                    <C.FilterProduct>
                        <C.FilterText>Filtrar por</C.FilterText>
                        <C.Select>
                            <C.Option disabled selected>Fabricante</C.Option>
                            <C.Option>Asus</C.Option>
                            <C.Option>Biostar</C.Option>
                            <C.Option>Galax</C.Option>
                            <C.Option>Msi</C.Option>
                            <C.Option>Gigabyte</C.Option>
                        </C.Select>
                        <C.Select>
                            <C.Option disabled selected>Tipo de memória</C.Option>
                            <C.Option>DDR3</C.Option>
                            <C.Option>DDR4</C.Option>
                            <C.Option>DDR5</C.Option>
                        </C.Select>
                    </C.FilterProduct>
                    <C.FilterProduct>
                        <C.FilterText>Ordenar por</C.FilterText>
                        <C.Select>
                            <C.Option disabled selected>Mais novos</C.Option>
                            <C.Option>Preço (asc)</C.Option>
                            <C.Option>Preço (desc)</C.Option>
                        </C.Select>
                    </C.FilterProduct>
                </C.FilterContainer>
            </C.ProductContainer>

            <Products/>
            <Newsletter/>
            <Footer/>
        </>
    )
}

export default ProductsList