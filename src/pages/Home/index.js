import { HomeArea, Container, ContentArea, Header, Title, Link, Button, Text, ButtonArea, Buttons, List, Registers, ListItem, Total } from "./styles"
import { IoAddCircleOutline, IoRemoveCircleOutline, IoExitOutline } from "react-icons/io5"
import { useState, useEffect, useContext } from "react"
import { Context } from "../../context/AuthContext"
import { NavLink, useNavigate } from "react-router-dom"
import axios from "axios"
import { clearStorage } from "../../localStorage"

export default () => {
    let navigate = useNavigate()
    let { userLS, setUserLS } = useContext(Context)
    const [registers, setRegisters] = useState([])
    const [totalBalance, setTotalBalance] = useState(0)

    useEffect(() => {
        // Se o usuário não estiver autenticado, redireciona para home
        if (!userLS) {
            navigate("/")
        } else {
            getRegisters()
        }
    }, [])

    const getRegisters = () => {
        const config = {
            headers: { Authorization: `Bearer ${userLS.token}` }
        }

        axios.get(process.env.REACT_APP_API_URL + "/registers", config)
            .then((res) => {
                //console.log(res.data)
                setRegisters(res.data)
                calcTotal(res.data)
            }).catch((error) => {
                alert("Error: " + error.response.data)
            })
    }

    const deleteRegister = (registerId) => {
        if(window.confirm("Tem certeza que deseja apagar esse registro?") === true){
            const config = {
                headers: { Authorization: `Bearer ${userLS.token}` }
            }
    
            axios.delete(process.env.REACT_APP_API_URL + `/register/${registerId}`, config)
                .then((res) => {
                    getRegisters()
                }).catch((error) => {
                    alert("Error: " + error.response.data)
                })
        }
    }

    const calcTotal = (data) => {
        let soma = 0;
        for (let reg of data) {
            if (reg.type === "in") {
                soma += Number(reg.value)
            } else {
                soma -= Number(reg.value)
            }
        }
        setTotalBalance(soma)
    }

    const formatDate = (date) => {
        let newDate = new Date(date)
        let day = newDate.getDate()
        let month = newDate.getMonth() + 1

        if (month < 10) {
            month = '0' + month
        }
        if (day < 10) {
            month = '0' + day
        }

        return `${day}/${month}`
    }

    const exit = () => {
        clearStorage()
        setUserLS(undefined)
        navigate("/")
    }

    if (!userLS) return

    return (
        <HomeArea>
            <Container>
                <Header>
                    <Title>Olá, {userLS.name.split(' ')[0]}</Title>
                    <Link onClick={exit}><IoExitOutline className="io-exit" /></Link>
                </Header>
                <ContentArea>
                    {registers.length === 0 &&
                        <div className="emptyField">Não há registros de entrada ou saída</div>
                    }
                    {registers.length > 0 &&
                        <List>
                            <Registers>
                                {registers.map((reg, ind) => (
                                    <ListItem key={ind} type={reg.type}>
                                        <div className="left-side">
                                            <div className="date">{formatDate(reg.date)}</div>
                                            <div className="text">{reg.description}</div>
                                        </div>
                                        <div className="right-side">
                                            <div className="value">{Number(reg.value).toFixed(2).toString().replace(".", ",")}</div>
                                            <div onClick={() => deleteRegister(reg._id)} className="close-button">x</div>
                                        </div>
                                    </ListItem>
                                ))}
                            </Registers>

                            <Total total={totalBalance}>
                                <div className="desc">SALDO</div>
                                <div className="value">{totalBalance.toFixed(2).toString().replace(".", ",")}</div>
                            </Total>
                        </List>
                    }
                </ContentArea>
                <Buttons>
                    <ButtonArea>
                        <Button><NavLink to="/nova-entrada"><IoAddCircleOutline className="icon-circle" /></NavLink> </Button>
                        <Text>Nova entrada</Text>
                    </ButtonArea>
                    <ButtonArea>
                        <Button> <NavLink to="/nova-saida"><IoRemoveCircleOutline className="icon-circle" /></NavLink></Button>
                        <Text>Nova saída</Text>
                    </ButtonArea>
                </Buttons>
            </Container>
        </HomeArea>
    )
}