import * as SC from "./styles";

export const Select = ({ name, value, onChange, accounts }) => {

    return (
        <SC.Select 
            onChange={(e) => onChange(e.target.name, e.target.value)}
            name={name}
            value={value}
        >
            {
                accounts.map((account) => <SC.Option 
                    value={account.currency}
                    key={account.id}
                >
                    {account.currency}
                </SC.Option>)
            }
        </SC.Select>
    )
};