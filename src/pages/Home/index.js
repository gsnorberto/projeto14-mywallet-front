import { HomeArea, Container, ContentArea, Header, Title, Link, Button, Text, ButtonArea, Buttons } from "./styles"
import { IoAddCircleOutline, IoRemoveCircleOutline, IoExitOutline } from "react-icons/io5";

export default () => {
    return (
        <HomeArea>
            <Container>
                <Header>
                    <Title>Olá, Fulano</Title>
                    <Link><IoExitOutline className="io-exit" /></Link>
                </Header>
                <ContentArea>
                    Não há registros de entrada ou saída
                </ContentArea>
                <Buttons>
                    <ButtonArea>
                        <Button><IoAddCircleOutline className="icon-circle" /></Button>
                        <Text>Nova entrada</Text>
                    </ButtonArea>
                    <ButtonArea>
                        <Button><IoRemoveCircleOutline className="icon-circle" /></Button>
                        <Text>Nova saída</Text>
                    </ButtonArea>
                </Buttons>
            </Container>
        </HomeArea>
    )
}