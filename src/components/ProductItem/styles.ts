import styled from "styled-components"

export const InfoProductContainer = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`

export const ProductContainer = styled.div`
    flex: 1;
    margin: 0px 20px;
    min-width: 280px;
    min-height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    margin-bottom: 20px;

    &:hover ${InfoProductContainer} {
        opacity: 1;
    }

    @media only screen and (max-width: 768px) {
        margin: 20px 0px;
    }

    @media only screen and (max-width: 480px) {
        min-width: 100%;
    }
`

export const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`

export const ImageProduct = styled.img`
    width: 90%;
    object-fit: cover;
    z-index: 3;
`

export const IconContainer = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
    transition: all 0.5s ease;

    @media only screen and (max-width: 768px) {
        margin: 5px;
    }

    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`