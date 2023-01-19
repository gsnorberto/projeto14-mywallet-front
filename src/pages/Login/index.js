import { LoginArea, Logo, Form, Input, Button, Link } from "./styles"

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
                <Link>Já tem uma conta? Entre agora!</Link>
        </LoginArea>
    )
}