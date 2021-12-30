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
    Title,
    TransactionList
} from './styles';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export function Dashboard() {

    const data: DataListProps[] = [
        {
            id: '1',
            type: 'positive',
            title: "Desenvolvimento de site",
            amount: "R$ 12.000,00",
            category: 
            {
                name: 'Vendas',
                icon: 'dollar-sign'
            },
            date: "23/11/2021"
        },
        {
            id: '2',
            type: 'negative',
            title: "Desenvolvimento de aplicativo",
            amount: "R$ 20.000,00",
            category: 
            {
                name: 'Vendas',
                icon: 'coffee'
            },
            date: "29/11/2021"
        },
        {
            id: '3',
            type: 'positive',
            title: "Manutenção em site",
            amount: "R$ 25.000,00",
            category: 
            {
                name: 'Vendas',
                icon: 'dollar-sign'
            },
            date: "21/11/2021"
        }
    ]

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

                <TransactionList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                /> 
            </Transactions>
        </Container>
    )
}