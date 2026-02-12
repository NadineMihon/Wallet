import { CurrencyAccounts } from "../../components/CurrencyAccounts";
import { Replenishment } from "../../components/Replenishment";
import { Exchange } from "../../components/Exchange";
import { TransactionHistory } from "../../components/TransactionHistory";
import { Container } from "../../components/ui/Container";
import { Typo } from "../../components/ui/Typo";

import * as SC from "./styles";

export const WalletPage = () => {
    return (
        <Container>
            <SC.WalletWrapper>
                <Typo variant="title">Кошелёк</Typo>
                <SC.WorkingArea>
                    <SC.MainArea>
                        <CurrencyAccounts />
                        <TransactionHistory />
                    </SC.MainArea>
                    <SC.AdditionalArea>
                        <Replenishment />
                        <Exchange />
                    </SC.AdditionalArea>
                </SC.WorkingArea>   
            </SC.WalletWrapper>
        </Container>
    )
};