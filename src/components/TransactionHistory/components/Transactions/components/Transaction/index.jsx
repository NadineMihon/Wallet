import { Container } from "../../../../../ui/Container";
import { Field } from "../../../../../ui/Field";
import { Typo } from "../../../../../ui/Typo";

import * as SC from "./styles";

export const Transaction = ({ transaction }) => {
    return (
        <Container>
            <Field>
                <SC.RowElement>
                    <Typo>{transaction.type}</Typo>
                </SC.RowElement>
                <SC.RowElement>
                    <Typo data-tone='muted' variant="caption">{transaction.detail}</Typo>
                </SC.RowElement>
                <SC.RowElement>
                    <Typo>{transaction.amount}</Typo>
                </SC.RowElement>
                <SC.RowElement>
                    <Typo data-tone='muted' variant="caption">{transaction.date}</Typo>
                </SC.RowElement>
            </Field>
        </Container>
    )
};