import { LoginArea, Logo, Form, Input, Button, Link } from "./styles"
import { NavLink } from "react-router-dom"

export default () => {
    const Login = () => {

    }

    return (
        <LoginArea>
                <Logo>MyWallet</Logo>
                <Form onSubmit={Login}>
                    <Input placeholder="E-mail"></Input>
                    <Input placeholder="Senha"></Input>
                    <Button type="submit">Entrar</Button>
                </Form>
                <Link> <NavLink to="/cadastro">Primeira vez? Cadastre-se!</NavLink></Link>
        </LoginArea>
    )
}