import { Typo } from "../../../ui/Typo";
import { WalletIcon } from "../../../ui/WalletIcon";

import * as SC from "./styles";

export const Account = ({ account }) => {
    return (
        <SC.Account>
            <WalletIcon />
            <SC.AccountInfo>
                <Typo data-tone="muted">{account.title}</Typo>
                <Typo variant="title">{account.symbol}{account.amount.toFixed(2)}</Typo>
            </SC.AccountInfo>
        </SC.Account>
    )
};