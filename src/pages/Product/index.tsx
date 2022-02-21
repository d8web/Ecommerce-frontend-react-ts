import * as C from "./styles"
import { Add, Remove } from "@material-ui/icons"
import Announcement from "../../components/Announcement"
import Navbar from "../../components/Navbar"
import Newsletter from "../../components/Newsletter"
import Footer from "../../components/Footer"

import ImagesObject from "../../data/Images"

const ProductItem = () => {
    return (
        <>
            <Navbar/>
            <Announcement/>

            <C.ProductContainer>
                <C.Wrapper>
                    <C.ImageContainer>
                        <C.ImageItem src={ImagesObject.Graphics} />
                    </C.ImageContainer>
                    <C.InfoContainer>
                        <C.ProductTitle>Relógio</C.ProductTitle>
                        <C.ProductDesc>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </C.ProductDesc>
                        <C.ProductPrice>R$ 499,00</C.ProductPrice>
                        <C.FilterContainer>
                            <C.Filter>
                                <C.FilterTitle>Cor</C.FilterTitle>
                                <C.FilterColor color="black" />
                                <C.FilterColor color="rebeccapurple" />
                                <C.FilterColor color="gray" />
                            </C.Filter>
                            <C.Filter>
                                <C.FilterTitle>Tamanho</C.FilterTitle>
                                <C.FilterSize>
                                    <C.FilterSizeOption>PP</C.FilterSizeOption>
                                    <C.FilterSizeOption>P</C.FilterSizeOption>
                                    <C.FilterSizeOption>M</C.FilterSizeOption>
                                    <C.FilterSizeOption>G</C.FilterSizeOption>
                                    <C.FilterSizeOption>GG</C.FilterSizeOption>
                                </C.FilterSize>
                            </C.Filter>
                        </C.FilterContainer>
                        <C.AddContainer>
                            <C.AmountContainer>
                                <Remove/>
                                <C.AmountNumber>1</C.AmountNumber>
                                <Add/>
                            </C.AmountContainer>
                            <C.AddToCartButton>ADICIONAR AO CARRINHO</C.AddToCartButton>
                        </C.AddContainer>
                    </C.InfoContainer>
                </C.Wrapper>
            </C.ProductContainer>

            <Newsletter/>
            <Footer/>
        </>
    )
}

export default ProductItem