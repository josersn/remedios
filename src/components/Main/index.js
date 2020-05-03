import React from 'react';
import Data from "../../data.json";
import { Container, List, Header, Card} from './styles';
// eslint-disable-next-line    

function Main() {
    const { nome, idade, img, remedios} = Data[0];
    console.log(remedios)
    return (
        <Container>
            <Header>
            <h1>Remédios da Vovo</h1>
            <img src={ img } alt={ idade }/>
            <ul>
                <li>Nome: { nome }</li>
                <li>Idade: { idade }</li>
            </ul>
            </Header>
            <List>
                    <Card>
                        <h2>
                        Nome: Loratemed
                        </h2>
                        <span>Frequência: 1 Vezes por dia</span>
                        <p>25mg de Loratadina</p>
                        <span>PS: Tomar antes de dormir</span>
                    </Card>
                { remedios && remedios.map( item => (
                   <Card key={ item.id }>
                   <h2>Nome: { item.name }</h2>
                   <span>Frequência: {item.amount} Vez por dia</span>
                   <p>{ item.description }</p>
                   <span>PS: { item.ps }</span>
               </Card> 
                ))}
            </List>
        </Container>
    )
}

export default Main;    