import { NewInputArea, Form, Title, Input, Button } from "./styles"
import { useState, useEffect, useContext } from "react"
import { Context } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default () => {
    let navigate = useNavigate()
    let { userLS } = useContext(Context)
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        // Se o usuário não estiver autenticado, redireciona para home
        if (!userLS) {
            navigate("/")
        }
    }, [])

    const addNewInput = (e) => {
        e.preventDefault()

        if(!value || !description){
            return
        }

        const config = {
            headers: { Authorization: `Bearer ${userLS.token}` }
        }

        let data = { value, description, type: 'in'}

        axios.post(process.env.REACT_APP_API_URL + "/new-register", data, config )
            .then((res) => {
                navigate("/home")
            }).catch((error) => {
                alert("Error: " + error.response.data)
            })
    }

    return (
        <NewInputArea>
            <Form onSubmit={addNewInput}>
                <Title>Nova Entrada</Title>
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
                <Button type="submit">Salvar entrada</Button>
            </Form>
        </NewInputArea>
    )
}