import styled from "styled-components";

export const HomeArea = styled.div`
    font-family: 'Raleway', sans-serif;
    background-color: #8C11BE;
    height: 100vh;
`
export const Container = styled.div`
    max-width: 400px;
    height: 100vh;
    padding: 10px 15px;
    margin: 0 auto;
`
export const Header = styled.div`
    padding-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .io-exit{
        width: 25px;
        height: 25px;
        color: #FFFFFF;
    }
`
export const ContentArea = styled.div`
    margin-top: 22px;
    margin-bottom: 12px;
    width: 100%;
    height: 440px;
    background-color: #FFFFFF;
    border-radius: 5px;
    text-align: center;
    vertical-align: middle;

    .emptyField{
        padding-top: 220px;
        color: #868686;
    }
`
export const Title = styled.div`
    font-weight: 700;
    color: #FFFFFF;
    font-size: 26px;
`
export const Link = styled.a`
    
`
export const Button = styled.a`
    margin-bottom: 31px;
    .icon-circle{
        width: 22px;
        height: 22px;  
    }
`
export const ButtonArea = styled.div`
    color: #FFFFFF;
    padding: 10px;
    display: flex;
    flex-direction: column;
    background-color: #A328D6;
    width: 49%;
    border-radius: 5px;
    //align-items: flex-start;
`
export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Text = styled.div`
    max-width: 40px;
`
export const List = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const Registers = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`
export const ListItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0px 15px;
    margin-top: 20px;
    font-size: 16px;

    .desc{
        display: flex;
    }
    .date{
        margin-right: 5px;
        color: #C6C6C6;
    }
    .text{
        text-align: left;
        max-width: 200px;
        overflow: hidden;
        text-overflow: ellipsis ;
    }
    .value{
        color: ${props => props.type === 'in' ? '#03AC00': '#C70000'};
    }
`
export const Total = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 15px;

    .desc{
        font-weight: 700;
    }
    .value{
        color: ${props => props.total < 0 ? '#C70000' : '#03AC00' }
    }
`