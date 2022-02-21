import styled from "styled-components"

export const Container = styled.header`
    height: 60px;
    width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-x: hidden;
    padding-right: 9.6px;

    @media only screen and (max-width: 998px) {
        width: 100%;
        padding: 10px 20px 10px 10px;
    }
`

export const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`

export const Language = styled.span`
    font-size: 16px;
    cursor: pointer;
`

export const SearchContainer = styled.div`
    border: 0.5px solid #ccc;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

export const Input = styled.input`
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: 500;
    color: #888;
`

export const Center = styled.div`
    flex: 1;
    text-align: center;

    @media only screen and (max-width: 768px) {
        text-align: left;
    }
`

export const Logo = styled.h1`
    font-weight: bold;

    @media only screen and (max-width: 768px) {
        font-size: 24px;
    }
`

export const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const MenuItem = styled.div`
    font-size: 16px;
    cursor: pointer;
    margin-left: 25px;

    @media only screen and (max-width: 768px) {
        font-size: 14px;
        margin-left: 15px;
    }
`