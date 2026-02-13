import { CurrencyAccounts } from "../../components/CurrencyAccounts";
import { Replenishment } from "../../components/Replenishment";
import { Exchange } from "../../components/Exchange";
import { TransactionHistory } from "../../components/TransactionHistory";
import { Container } from "../../components/ui/Container";
import { Typo } from "../../components/ui/Typo";
import { useWallet } from "../../hooks/useWallet";

import * as SC from "./styles";

export const WalletPage = () => {
    const { accounts, transactions, topUpAccount } = useWallet();

    return (
        <Container>
            <SC.WalletWrapper>
                <Typo variant="title">Кошелёк</Typo>
                <SC.WorkingArea>
                    <SC.MainArea>
                        <CurrencyAccounts accounts={accounts} />
                        <TransactionHistory transactions={transactions} />
                    </SC.MainArea>
                    <SC.AdditionalArea>
                        <Replenishment accounts={accounts} topUpAccount={topUpAccount} />
                        <Exchange accounts={accounts}/>
                    </SC.AdditionalArea>
                </SC.WorkingArea>   
            </SC.WalletWrapper>
        </Container>
    )
};