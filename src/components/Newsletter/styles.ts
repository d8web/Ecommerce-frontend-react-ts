import styled from "styled-components"

export const NewsletterContainer = styled.section`
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fcf5f5;
`

export const TitleNewsletter = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;

    @media only screen and (max-width: 768px) {
        font-size: 48px;
    }

    @media only screen and (max-width: 480px) {
        font-size: 36px;
    }
`

export const NewsletterDescription = styled.p`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;

    @media only screen and (max-width: 768px) {
        font-size: 20px;
        text-align: center;
    }

    @media only screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const NewsletterInputContainer = styled.div`
    width: 50%;
    height: 60px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid lightgray;

    @media only screen and (max-width: 768px) {
        width: 90%;
    }

    @media only screen and (max-width: 290px) {
        flex-direction: column;
        border: none;
        background-color:transparent
    }
`

export const NewsletterInput = styled.input`
    border: none;
    outline: none;
    flex: 8;
    padding-left: 20px;
    height: 100%;
    font-size: 18px;

    &::placeholder {
        font-size: 18px;
        font-weight: 500;
    }

    @media only screen and (max-width: 768px) {
        flex: 6;
        
        &::placeholder {
            font-size: 16px;
            font-weight: 500;
        }
    }

    @media only screen and (max-width: 290px) {
        margin-bottom: 10px;
        width: 100%;
        padding: 10px;
    }
`

export const NewsletterButton = styled.button`
    flex: 1;
    height: 100%;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: #2a3de8;
    color: white;

    @media only screen and (max-width: 480px) {
        flex: 3;
    }

    @media only screen and (max-width: 290px) {
        width: 100%;
        padding: 10px;
    }
`