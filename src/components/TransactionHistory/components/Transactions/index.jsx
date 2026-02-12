import { Container } from "../../../ui/Container";
import { Field } from "../../../ui/Field";
import { Typo } from "../../../ui/Typo";
import { Transaction } from "./components/Transaction";

import * as SC from "./styles";

const transactions = [
    {
        id: 1,
        type: 'Пополнение',
        detail: '+500 RUB',
        amount: '+500 RUB',
        date: '12.02.2026, 10:05',
    },
    {
        id: 2,
        type: 'Обмен',
        detail: '100 USD → 92.50 EUR',
        amount: '+92.5 EUR',
        date: '13.02.2026, 11:25',
    },
    {
        id: 3,
        type: 'Пополнение',
        detail: '+300 RUB',
        amount: '+300 RUB',
        date: '14.02.2026, 15:00',
    },
    {
        id: 4,
        type: 'Обмен',
        detail: '100 USD → 92.50 EUR',
        amount: '+92.5 EUR',
        date: '16.02.2026, 12:00',
    },
];

export const Transactions = () => {
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