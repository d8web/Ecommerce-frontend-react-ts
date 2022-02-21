import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 90px);
    display: flex;
    position: relative;
    overflow: hidden;

    @media only screen and (max-width: 980px) {
        height: auto;
    }
`

export const ArrowArea = styled.div<{ direction: string }>`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

export const WrapperArea = styled.div<{ currentSlider: number }>`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.currentSlider * -100}vw);
`

export const SliderContent = styled.div<{ bg: string }>`
    width: 100vw;
    height: calc(100vh - 90px);
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};

    @media only screen and (max-width: 980px) {
        flex-direction: column;
        height: auto;
    }
`

export const ImageAreaContent = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ImageItem = styled.img`
    height: 80%;

    @media only screen and (max-width: 1366px) {
        height: 70%;
    }

    @media only screen and (max-width: 1140px) {
        height: 60%;
    }

    @media only screen and (max-width: 980px) {
        width: 90%;
        height: 90%;
    }
`

export const InfoAreaContent = styled.div`
    flex: 1;
    padding: 50px;

    @media only screen and (max-width: 1280px) {
        padding: 20px;
    }

    @media only screen and (max-width: 980px) {
        text-align: center;
    }
`

export const Headline = styled.h1`
    font-size: 70px;

    @media only screen and (max-width: 1366px) {
        font-size: 48px;
    }

    @media only screen and (max-width: 1280px) {
        font-size: 42px;
    }

    @media only screen and (max-width: 780px) {
        font-size: 36px;
    }
`

export const Description = styled.p`
    margin: 50px 0px;
    font-size: 22px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 2px;

    @media only screen and (max-width: 1366px) {
        font-size: 18px;
        margin: 36px 0px;
    }
`

export const CallToAction = styled.button`
    padding: 10px 20px;
    outline: none;
    font-size: 20px;
    font-weight: 500;
    background-color: transparent;
    color: black;
    border: 1px solid #ccc;
    cursor: pointer;
`