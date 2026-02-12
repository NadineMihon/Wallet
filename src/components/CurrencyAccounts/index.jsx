import { Container } from "../ui/Container";
import { Account } from "./components/Account";

import * as SC from "./styles";

const accounts = [
    {
        id: 1,
        title: 'Счет в рублях',
        symbol: '₽',
    },
    {
        id: 2,
        title: 'Счет в евро',
        symbol: '€',
    },
    {
        id: 3,
        title: 'Счет в долларах',
        symbol: '$',
    },
    {
        id: 4,
        title: 'Счет в юанях',
        symbol: '¥',
    },  
];

export const CurrencyAccounts = () => {
    return (
        <Container>
            <SC.CurrencyAccounts>
                {
                    accounts.map((account) => <Account account={account} key={account.id} />)    
                }    
            </SC.CurrencyAccounts>
        </Container> 
    )
};