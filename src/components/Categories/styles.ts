import styled from "styled-components"

export const CategoriesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 80%;
    margin: 80px auto;

    @media only screen and (max-width: 1366px) {
        width: 100%;
        padding: 0 10px;
    }
`