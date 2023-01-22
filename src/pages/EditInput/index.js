import { EditInputArea, Form, Title, Input, Button } from "./styles"
import { useState, useEffect, useContext } from "react"
import { Context } from "../../context/AuthContext"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

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

    const updateInput = (e) => {
        e.preventDefault()

        if(!value || !description){
            return
        }

        const config = {
            headers: { Authorization: `Bearer ${userLS.token}` }
        }

        let data = { value, description, type: 'in'}

        axios.put(process.env.REACT_APP_API_URL + `/register/${registerId}`, data, config )
            .then((res) => {
                navigate("/home")
            }).catch((error) => {
                alert("Error: " + error.response.data)
            })
    }

    if(!userLS) return

    return (
        <EditInputArea>
            <Form onSubmit={updateInput}>
                <Title>Editar Entrada</Title>
                <Input
                    type="number"
                    placeholder="Valor"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <Input
                    placeholder="Descrição"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <Button type="submit">Atualizar entrada</Button>
            </Form>
        </EditInputArea>
    )
}