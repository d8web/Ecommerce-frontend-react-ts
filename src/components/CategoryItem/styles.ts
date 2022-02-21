import styled from "styled-components"

export const CategoryItemContainer = styled.div`
    width: calc(33% - 40px);
    margin: 80px 20px;
    height: 60vh;
    position: relative;

    @media only screen and (max-width: 1366px) {
        width: calc(50% - 40px);
        margin: 20px;
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
        margin: 20px 0px;
        height: 50vh;
    }
    
    @media only screen and (max-width: 480px) {
        height: 30vh;
    }
`

export const ImageCategory = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const CategoryInfoArea = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const CategoryTitle = styled.h1`
    color: #fff;
    margin-bottom: 20px;
`

export const CategoryButton = styled.button`
    border: none;
    outline: none;
    padding: 10px 20px;
    background-color: #fff;
    color: gray;
    font-weight: 600;
    cursor: pointer;
`