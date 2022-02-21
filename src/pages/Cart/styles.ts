import styled from "styled-components"

export const CartContainer = styled.section`
    width: 80%;
    margin: auto;

    @media only screen and (max-width: 998px) {
        width: 100%;
        padding: 10px;
    }
`

export const Wrapper = styled.div`
    padding: 40px 0px;
`

export const CartTitle = styled.h1`
    text-transform: uppercase;

    @media only screen and (max-width: 768px) {
        text-align: center;
    }
`

export const CardTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const TopButton = styled.button<{ border?: string }>`
    padding: 10px 28px;
    font-weight: 600;
    font-size: 14px;
    border-radius: 3px;
    cursor: pointer;
    outline: none;
    border: ${props => props.border === "filled" ? "none" : "0.5px solid lightgray"};
    background-color: ${props => props.border === "filled" ? "#2a3de8" : "transparent"};
    color: ${props => props.border === "filled" && "white"};
`

export const TopTexts = styled.div`
    display: flex;
    align-items: center;

    @media only screen and (max-width: 768px) {
        margin: 20px 0px;
        flex-direction: column;
    }
`

export const Text = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;

    @media only screen and (max-width: 768px) {
        margin: 10px 0px;
    }
`

export const CardBottom = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 60px;

    @media only screen and (max-width: 1280px) {
        flex-direction: column;
    }
`

export const ProductInfo = styled.div`
    flex: 3;
`

export const ProductItem = styled.div`
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        padding: 20px 0px;
    }
`

export const ProductDetail = styled.div`
    flex: 2;
    display: flex;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

export const ProductImage = styled.img`
    width: 200px;

    @media only screen and (max-width: 768px) {
        width: 70%;
        object-fit: cover;
    }

    @media only screen and (max-width: 580px) {
        width: 100%;
    }
`

export const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media only screen and (max-width: 768px) {
        justify-content: center;
        align-items: center;
    }
`

export const ProductName = styled.span`
    @media only screen and (max-width: 580px) {
        text-align: center;
        margin: 10px 0px;
        display: flex;
        flex-direction: column;
    }
`

export const ProductId = styled.span`
    @media only screen and (max-width: 580px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const ProductColor = styled.div<{ color: string }>`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: ${props => props.color};

    @media only screen and (max-width: 768px) {
        margin: 10px 0;
    }
`

export const ProductSize = styled.span`
    @media only screen and (max-width: 580px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

export const ProductAmount = styled.span`
    font-size: 24px;
    margin: 5px;
`

export const ProductPrice = styled.span`
    font-size: 30px;
`


export const Hr = styled.hr`
    background-color: lightgray;
    border: none;
    height: 1px;
`

export const ProductSummary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 5px;
    padding: 28px;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const SummaryTitle = styled.h1`
    font-weight: 300;
    margin-bottom: 20px;
`

export const SummaryItem = styled.div<{ fontType?: string }>`
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.fontType === "total" && "600"};
    font-size: ${props => props.fontType === "total" && "24px"};
`

export const SummaryItemText = styled.span``

export const SummaryItemPrice = styled.span``

export const SummaryButton = styled.button`
    outline: none;
    border: none;
    color: white;
    background-color: #2a3de8;
    font-weight: 600;
    border-radius: 3px;
    width: 100%;
    height: 44px;
    cursor: pointer;
    margin-top: 20px;
`