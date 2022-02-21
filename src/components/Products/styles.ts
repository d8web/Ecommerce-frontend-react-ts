import styled from "styled-components"

export const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 80%;
    justify-content: space-between;
    margin: 100px auto;

    @media only screen and (max-width: 1366px) {
        width: 100%;
        padding: 0 10px;
    }
`