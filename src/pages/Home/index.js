import { HomeArea, Container, ContentArea, Header, Title, Link, Button, Text, ButtonArea, Buttons, List, Registers, ListItem, Total } from "./styles"
import { IoAddCircleOutline, IoRemoveCircleOutline, IoExitOutline } from "react-icons/io5";
import { useState } from "react";

export default () => {
    const [emptyList, setEmptyList] = useState(false);
    const [totalBalance, setTotalBalance] = useState(100);

    return (
        <HomeArea>
            <Container>
                <Header>
                    <Title>Olá, Fulano</Title>
                    <Link><IoExitOutline className="io-exit" /></Link>
                </Header>
                <ContentArea>
                    {emptyList &&
                        <div className="emptyField">Não há registros de entrada ou saída</div>
                    }
                    {!emptyList &&
                        <List>
                            <Registers>
                                <ListItem type={"in"}>
                                    <div className="desc">
                                        <div className="date">30/11</div>
                                        <div className="text">Almoço mãe</div>
                                    </div>
                                    <div className="value">20,00</div>
                                </ListItem>
                            </Registers>
                            
                            <Total total={totalBalance}>
                                <div className="desc">SALDO</div>
                                <div className="value">2849,96</div>
                            </Total>
                        </List>
                    }
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