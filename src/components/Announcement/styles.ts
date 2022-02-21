import styled from "styled-components"

export const Container = styled.div`
    height: 30px;
    background-color: #2a3de8;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: 16px;
    font-weight: 400;

    @media only screen and (max-width: 768px) {
        text-align: center;
        height: auto;
        padding: 10px;
    }
`