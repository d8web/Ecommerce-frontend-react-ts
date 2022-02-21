import styled from "styled-components"

export const Container = styled.section`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("https://images.unsplash.com/photo-1638913660106-73b4bac0db09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80") center no-repeat;
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Wrapper = styled.div`
    width: 35%;
    padding: 40px;
    background-color: white;
    border-radius: 5px;

    @media only screen and (max-width: 1600px) {
        width: 50%;
    }

    @media only screen and (max-width: 1366px) {
        width: 50%;
    }

    @media only screen and (max-width: 1240px) {
        width: 70%;
    }

    @media only screen and (max-width: 890px) {
        width: 80%;
    }

    @media only screen and (max-width: 768px) {
        width: 90%;
        padding: 20px;
    }
`

export const Title = styled.h1`
    font-size: 24px;
`

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const Input = styled.input`
    flex: 1;
    min-width: 40%;
    outline: none;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    font-size: 16px;
    border: 0.5px solid lightgray;
`

export const Aggrement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`

export const Button = styled.button`
    width: 40%;
    border: none;
    outline: none;
    padding: 10px 20px;
    cursor: pointer;
    background-color: #2a3de8;
    color: #fff;
    font-size: 16px;
`