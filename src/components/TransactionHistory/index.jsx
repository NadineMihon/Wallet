import { Card } from "../ui/Card";
import { Typo } from "../ui/Typo";
import { Transactions } from "./components/Transactions";

import * as SC from "./styles";

export const TransactionHistory = () => {
    return (
        <Card>
            <SC.TransactionHistoryWrapper>
                <Typo variant='subtitle'>История операций</Typo>
                <Transactions />  
            </SC.TransactionHistoryWrapper>
        </Card>
    )
};