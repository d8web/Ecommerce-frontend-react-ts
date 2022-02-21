import * as C from "./styles"
import { Add, Remove } from "@material-ui/icons"
import Navbar from "../../components/Navbar"
import Announcement from "../../components/Announcement"
import Newsletter from "../../components/Newsletter"
import Footer from "../../components/Footer"

const CartPage = () => {
    return (
        <>
            <Navbar/>
            <Announcement/>

            <C.CartContainer>
                <C.Wrapper>

                    <C.CartTitle>Meu carrinho</C.CartTitle>
                    <C.CardTop>
                        <C.TopButton>CONTINUAR COMPRANDO</C.TopButton>
                        <C.TopTexts>
                            <C.Text>Meu carrinho (2)</C.Text>
                            <C.Text>Minha lista de desejos (0)</C.Text>
                        </C.TopTexts>
                        <C.TopButton border="filled">CHECKOUT</C.TopButton>
                    </C.CardTop>
                    
                    <C.CardBottom>
                        <C.ProductInfo>

                            <C.ProductItem>
                                <C.ProductDetail>
                                    <C.ProductImage src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                                    <C.Details>
                                        <C.ProductName><b>Produto: </b>SAPATO XYZ TOP</C.ProductName>
                                        <C.ProductId><b>ID: </b>6768657463453</C.ProductId>
                                        <C.ProductColor color="black"/>
                                        <C.ProductSize><b>Tamanho: </b>38</C.ProductSize>
                                    </C.Details>
                                </C.ProductDetail>
                                <C.PriceDetail>
                                    <C.ProductAmountContainer>
                                        <Add/>
                                        <C.ProductAmount>2</C.ProductAmount>
                                        <Remove/>
                                    </C.ProductAmountContainer>
                                    <C.ProductPrice>R$ 199,00</C.ProductPrice>
                                </C.PriceDetail>
                            </C.ProductItem>

                            <C.Hr/>

                            <C.ProductItem>
                                <C.ProductDetail>
                                    <C.ProductImage src="https://pngimg.com/uploads/refrigerator/refrigerator_PNG101550.png"/>
                                    <C.Details>
                                        <C.ProductName><b>Produto: </b>REFRIGERADOR BRASTEMP 200 LITROS</C.ProductName>
                                        <C.ProductId><b>ID: </b>57567873434</C.ProductId>
                                        <C.ProductColor color="gray"/>
                                        <C.ProductSize><b>Tamanho: </b>1.0M</C.ProductSize>
                                    </C.Details>
                                </C.ProductDetail>
                                <C.PriceDetail>
                                    <C.ProductAmountContainer>
                                        <Add/>
                                        <C.ProductAmount>2</C.ProductAmount>
                                        <Remove/>
                                    </C.ProductAmountContainer>
                                    <C.ProductPrice>R$ 2599,00</C.ProductPrice>
                                </C.PriceDetail>
                            </C.ProductItem>

                        </C.ProductInfo>

                        <C.ProductSummary>
                            <C.SummaryTitle>RESUMO DO PEDIDO</C.SummaryTitle>
                            <C.SummaryItem>
                                <C.SummaryItemText>Subtotal</C.SummaryItemText>
                                <C.SummaryItemPrice>R$ 299,99</C.SummaryItemPrice>
                            </C.SummaryItem>
                            <C.SummaryItem>
                                <C.SummaryItemText>Tempo de entrega</C.SummaryItemText>
                                <C.SummaryItemPrice>R$ 5,99</C.SummaryItemPrice>
                            </C.SummaryItem>
                            <C.SummaryItem>
                                <C.SummaryItemText>Cupom de desconto</C.SummaryItemText>
                                <C.SummaryItemPrice>R$ -29,90</C.SummaryItemPrice>
                            </C.SummaryItem>
                            <C.SummaryItem fontType="total">
                                <C.SummaryItemText>Total</C.SummaryItemText>
                                <C.SummaryItemPrice>R$ 349,00</C.SummaryItemPrice>
                            </C.SummaryItem>
                            <C.SummaryButton>FINALIZAR PEDIDO</C.SummaryButton>
                        </C.ProductSummary>

                    </C.CardBottom>

                </C.Wrapper>
            </C.CartContainer>

            <Newsletter/>
            <Footer/>
        </>
    )
}

export default CartPage