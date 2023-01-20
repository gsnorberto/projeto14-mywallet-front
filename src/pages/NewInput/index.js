import { NewInputArea, Container, Title, Input, Button } from "./styles"

export default () => {
    return (
        <NewInputArea>
            <Container>
                <Title>Nova Entrada</Title>
                <Input placeholder="Valor" />
                <Input placeholder="Descrição" />
                <Button>Salvar entrada</Button>
            </Container>
        </NewInputArea>
    )
}