import styled from "styled-components"

export const FooterContainer = styled.footer`
    display: flex;
    width: 80%;
    margin: auto;
    padding: 40px 0px;
    flex-wrap: wrap;

    @media only screen and (max-width: 1366px) {
        width: 100%;
        padding: 0 10px;
    }
`

export const Left = styled.div`
    width: 33.3%;
    display: flex;
    flex-direction: column;
    padding: 20px;

    @media only screen and (max-width: 1140px) {
        padding: 10px;
        width: 50%;
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`

export const FooterLogo = styled.h1``

export const FooterDesc = styled.p`
    margin: 20px 0px;
    font-size: 16px;
    line-height: 26px;
`

export const FooterSocialContainer = styled.div`
    display: flex;
`

export const FooterSocialIcon = styled.div<{ color: string }>`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: #${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin-right: 10px;
    cursor: pointer;
`

export const Center = styled.div`
    width: 33.3%;
    padding: 20px;
    padding-left: 40px;

    @media only screen and (max-width: 1140px) {
        padding: 10px;
        width: 50%;
        padding-left: 28px;
    }

    @media only screen and (max-width: 768px) {
        padding: 10px;
        width: 100%;
        margin-top: 20px;
    }    
`

export const FooterTitle = styled.h3`
    margin-bottom: 40px;
`

export const FooterList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

export const FooterListItem = styled.li`
    width: 50%;
    margin-bottom: 20px;
    font-size: 16px;

    @media only screen and (max-width: 480px) {
        width: 100%;
    }
`

export const Right = styled.div`
    width: 33.3%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    padding-left: 60px;

    @media only screen and (max-width: 1140px) {
        padding: 10px;
        width: 50%;
        margin-top: 20px;
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`

export const FooterContactItem = styled.span`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

export const PaymentImage = styled.img`
    width: 50%;

    @media only screen and (max-width: 768px) {
        width: 40%;
    }

    @media only screen and (max-width: 480px) {
        width: 60%;
        margin-bottom: 20px;
    }

    @media only screen and (max-width: 400px) {
        width: 90%;
    }
`