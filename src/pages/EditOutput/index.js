import { EditOutputArea, Form, Title, Input, Button } from "./styles"
import { useState, useEffect, useContext } from "react"
import { Context } from "../../context/AuthContext"
import { useNavigate, useParams, NavLink  } from "react-router-dom"
import axios from "axios"
import { IoArrowBackCircleSharp } from "react-icons/io5"

export default () => {
    let navigate = useNavigate()
    let { userLS } = useContext(Context)
    let { registerId } = useParams()
    const [value, setValue] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        // Se o usuário não estiver autenticado, redireciona para home
        if (!userLS) {
            navigate("/")
        } else {
            getRegister()
        }
    }, [])

    const getRegister = () => {
        const config = {
            headers: { Authorization: `Bearer ${userLS.token}` }
        }

        axios.get(process.env.REACT_APP_API_URL + `/register/${registerId}`, config)
            .then((res) => {
                setDescription(res.data.description)
                setValue(res.data.value)
            }).catch((error) => {
                alert("Error: " + error.response.data)
            })
    }

    const updateOutput = (e) => {
        e.preventDefault()

        if(!value || !description){
            return
        }

        const config = {
            headers: { Authorization: `Bearer ${userLS.token}` }
        }

        let data = { value, description, type: 'out'}

        axios.put(process.env.REACT_APP_API_URL + `/register/${registerId}`, data, config )
            .then((res) => {
                navigate("/home")
            }).catch((error) => {
                alert("Error: " + error.response.data)
            })
    }
    
    if(!userLS) return

    return (
        <EditOutputArea>
            <Form onSubmit={updateOutput}>
            <Title>
                    Editar Saída
                    <NavLink to="/home"><IoArrowBackCircleSharp className="back-icon" /></NavLink>
                </Title>
                <Input
                    data-test="registry-amount-input"
                    type="number"
                    placeholder="Valor"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <Input
                    data-test="registry-name-input"
                    placeholder="Descrição"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <Button data-test="registry-save" type="submit">Atualizar saída</Button>
            </Form>
        </EditOutputArea>
    )
}