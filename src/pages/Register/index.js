import { RegisterArea, Logo, Form, Input, Button, Link } from "./styles"

export default () => {
    const addUser = () => {

    }

    return (
        <RegisterArea>
            <Logo>MyWallet</Logo>
                <Form onSubmit={addUser}>
                    <Input placeholder="Nome"></Input>
                    <Input placeholder="E-mail"></Input>
                    <Input placeholder="Senha"></Input>
                    <Input placeholder="Confirme a Senha"></Input>
                    <Button type="submit">Cadastrar</Button>
                </Form>
                <Link>Já tem uma conta? Entre agora!</Link>
        </RegisterArea>
    )
}