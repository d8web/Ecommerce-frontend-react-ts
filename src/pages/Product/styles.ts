import styled from "styled-components"

export const ProductContainer = styled.section`
    width: 80%;
    margin: 60px auto;

    @media only screen and (max-width: 998px) {
        width: 100%;
        padding: 10px;
    }
`

export const Wrapper = styled.div`
    padding: 50px 0px;
    display: flex;

    @media only screen and (max-width: 1366px) {
        flex-direction: column;
    }
`

export const ImageContainer = styled.div`
    flex: 1;
`

export const ImageItem = styled.img`
    width: 100%;
    object-fit: cover;
`

export const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 40px;

    @media only screen and (max-width: 768px) {
        padding: 10px;
    }
`

export const ProductTitle = styled.h1`
    font-size: 42px;
    font-weight: 500;
`

export const ProductDesc = styled.p`
    margin: 20px 0px;
    letter-spacing: 2px;
    font-size: 16px;
    line-height: 26px;
`

export const ProductPrice = styled.span`
    font-size: 36px;
`

export const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`

export const Filter = styled.div`
    display: flex;
    align-items: center;
`

export const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 400;
`

export const FilterColor = styled.div<{ color: string }>`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: ${props => props.color};
    margin: 0 5px;
    cursor: pointer;
`

export const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px 10px;
    outline: none;
`

export const FilterSizeOption = styled.option``

export const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }

    @media only screen and (max-width: 580px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

export const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;

    @media only screen and (max-width: 580px) {
        margin-bottom: 20px;
    }
`

export const AmountNumber = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 5px;
`

export const AddToCartButton = styled.button`
    outline: none;
    padding: 8px 24px;
    border: 1.5px solid #2a3de8;
    background-color: transparent;
    color: #2a3de8;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 3px;
    transition: 0.5s all ease;

    &:hover {
        background-color: #2a3de8;
        color: #fff;
        font-weight: 500;
    }
`