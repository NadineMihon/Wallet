import { Container } from "../../../ui/Container";
import { Field } from "../../../ui/Field";
import { Typo } from "../../../ui/Typo";
import { Transaction } from "./components/Transaction";

import * as SC from "./styles";

export const Transactions = ({ transactions }) => {
    return (
        <Container>
            <SC.Transactions>
                <Field>
                    <SC.RowElement>
                        <Typo data-tone='muted'>ТИП</Typo>
                    </SC.RowElement>
                    <SC.RowElement>
                        <Typo data-tone='muted'>ДЕТАЛИ</Typo>
                    </SC.RowElement>
                    <SC.RowElement>
                        <Typo data-tone='muted'>СУММА</Typo>
                    </SC.RowElement>
                    <SC.RowElement>
                        <Typo data-tone='muted'>ДАТА</Typo>
                    </SC.RowElement>
                </Field>
                <SC.TransactionList>
                    {
                        transactions.map((transaction) => <Transaction transaction={transaction} key={transaction.id}/>)
                    }
                </SC.TransactionList>
            </SC.Transactions>
        </Container>
    )
};