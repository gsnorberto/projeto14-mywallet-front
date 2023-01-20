import { NewOutputArea, Form, Title, Input, Button } from "./styles"

export default () => {
    const addNewOutput = (e) => {
        e.preventDefault()
        console.log("easdf");
    }

    return (
        <NewOutputArea>
            <Form onSubmit={addNewOutput}>
                <Title>Nova Saída</Title>
                <Input placeholder="Valor" />
                <Input placeholder="Descrição" />
                <Button type="submit">Salvar saída</Button>
            </Form>
        </NewOutputArea>
    )
}