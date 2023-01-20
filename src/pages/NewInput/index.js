import { NewInputArea, Form, Title, Input, Button } from "./styles"

export default () => {
    const addNewInput = (e) => {
        e.preventDefault()
    }

    return (
        <NewInputArea>
            <Form onSubmit={addNewInput}>
                <Title>Nova Entrada</Title>
                <Input placeholder="Valor" />
                <Input placeholder="Descrição" />
                <Button type="submit">Salvar entrada</Button>
            </Form>
        </NewInputArea>
    )
}