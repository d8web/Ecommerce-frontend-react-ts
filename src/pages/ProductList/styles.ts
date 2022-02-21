import styled from "styled-components"

export const ProductContainer = styled.section`
    width: 80%;
    margin: auto;

    @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 0 10px;
    }
`

export const FilterTitle = styled.h1`
    width: 80%;
    margin: 20px auto;
    font-size: 32px;

    @media only screen and (max-width: 1100px) {
        margin: 20px 0px;
        width: 100%;
        text-align: center;
    }
`

export const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const FilterProduct = styled.div`
    margin: 20px 0px;

    @media only screen and (max-width: 1100px) {
        margin: 0px;
        display: flex;
        flex-direction: column;
    }
`

export const FilterText = styled.span`
    font-size: 20px;
    font-weight: 500;
    margin-right: 20px;

    @media only screen and (max-width: 1100px) {
        margin: 20px 0px;
    }
`

export const Select = styled.select`
    padding: 10px 38px;
    margin-right: 20px;
    outline: none;
    border: 1px solid #ccc;
    font-size: 16px;
    font-weight: 400;
    font-family: "Ping Pong";

    &:last-child {
        margin: 0px;
    }

    @media only screen and (max-width: 1100px) {
        padding: 10px;
        margin: 10px 0px;

        &:last-child {
            margin-top: 10px;
        }
    }
`

export const Option = styled.option``