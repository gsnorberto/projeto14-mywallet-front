import { LoginArea, Logo, Form, Input, Button, Link } from "./styles"
import { NavLink, useNavigate } from "react-router-dom"
import { useState, useEffect, useContext } from "react";
import { Context } from "../../context/AuthContext";
import { addLocalStorage } from "../../localStorage";
import axios from "axios"

export default () => {
    let navigate = useNavigate()
    let { userLS, setUserLS } = useContext(Context)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (userLS) {
            navigate("/home")
        }
    }, []);

    const Login = (e) => {
        e.preventDefault()

        if (!email || !password) {
            return
        }

        let data = { email, password }
        axios.post(process.env.REACT_APP_API_URL + "/auth/login", data)
            .then((res) => {
                let token = { token: res.data.token, name: res.data.name }
                addLocalStorage(token)
                setUserLS(token)
                navigate("/home")
            }).catch((error) => {
                alert("Error: " + error.response.data)
            })
    }

    return (
        <LoginArea>
            <Logo>MyWallet</Logo>
            <Form onSubmit={Login}>
                <Input
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button type="submit">Entrar</Button>
            </Form>
            <Link> <NavLink to="/cadastro">Primeira vez? Cadastre-se!</NavLink></Link>
        </LoginArea>
    )
}