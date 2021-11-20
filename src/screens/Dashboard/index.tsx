import React from 'react';

import { 
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlightCards,
    Transactions,
    Title
} from './styles';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';

export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/50780573?v=4' }} />
                        <User>
                            <UserGreeting> Olá, </UserGreeting>
                            <UserName>Lulu</UserName>
                        </User>
                    </UserInfo>

                    <Icon name="power" />
                </UserWrapper>
            </Header>
            <HighlightCards
                
            >
                <HighlightCard type="up" title="Entradas" amount="R$ 100,00" lastTransaction="10/11/2021" />
                <HighlightCard type="down" title="Saidas" amount="R$ 50,0" lastTransaction="11/11/2021" />
                <HighlightCard type="total" title="Total" amount="R$ 50,0" lastTransaction="12/11/2021" />
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>
                <TransactionCard />
            </Transactions>
        </Container>
    )
}