import { Container } from "../ui/Container";
import { Account } from "./components/Account";

import * as SC from "./styles";

export const CurrencyAccounts = ({ accounts }) => {
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