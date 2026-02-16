import { Typo } from "../../../ui/Typo";
import { WalletIcon } from "../../../ui/WalletIcon";

import * as SC from "./styles";

export const Account = ({ account }) => {
    const floorTo2 = (value) => {
        return Math.floor(value * 100) / 100;
    };

    return (
        <SC.Account>
            <WalletIcon />
            <SC.AccountInfo>
                <Typo data-tone="muted">{account.title}</Typo>
                <Typo variant="title">{account.symbol}{floorTo2(account.amount)}</Typo>
            </SC.AccountInfo>
        </SC.Account>
    )
};