import styled from "styled-components";

export const NewInputArea = styled.div`
    font-family: 'Raleway', sans-serif;
    background-color: #8C11BE;
    height: 100vh;
`
export const Form = styled.form`
    margin: 0 auto;
    max-width: 330px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const Title = styled.div`
    font-size: 26px;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 40px;
    color: #FFFFFF;
`
export const Input = styled.input`
    border: 0;
    width: 100%;
    padding: 10px 15px;
    font-size: 20px;
    border-radius: 5px;
    outline: 0;
    margin-bottom: 8px;
`
export const Button = styled.button`
    width: 100%;
    color: #FFFFFF;
    background-color: #A328D6;
    border-radius: 5px;
    border: 0;
    height: 45px;
    margin-top: 10px;
    cursor: pointer;

    &:hover{
        opacity: 0.9;
    }
`