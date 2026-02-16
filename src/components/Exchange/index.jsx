import { useEffect, useState } from "react";
import { Card } from "../ui/Card";
import { Typo } from "../ui/Typo";
import { Form } from "../ui/Form";
import { Field } from "../ui/Field";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { Button } from "../ui/Button";

import * as SC from "./styles";

export const Exchange = ({ accounts, exchangeCurrency, getAmountTo }) => {
    const initialValues = { amountFrom: '', currencyFrom: 'RUB', currencyTo: 'RUB', amountTo: '' };

    const [formValues, setFormValues] = useState(initialValues);

    const onChange = (name, value) => {
        setFormValues({ ...formValues, [name]: value });
    };

    useEffect(() => {
        if (formValues.amountFrom <= maxAmount) {
            getAmountTo(formValues, setFormValues);    
        } else if (formValues.amountFrom > maxAmount) {
            alert('На счете недостаточно средств');
        }
    }, [formValues.amountFrom, formValues.currencyFrom, formValues.currencyTo])

    const onSubmit = (e) => {
        e.preventDefault();
        if (formValues.amountFrom <= maxAmount) {
            exchangeCurrency(formValues);    
        }
        setFormValues(initialValues);
    };
    
    const fromAccount = accounts.find(account => account.currency === formValues.currencyFrom);
    const maxAmount = fromAccount?.amount ?? 0;

    const disabled = !formValues.amountFrom 
        || !formValues.currencyFrom 
        || !formValues.currencyTo 
        || (formValues.currencyFrom === formValues.currencyTo)
        || (formValues.amountFrom > maxAmount);

    return (
        <Card>
            <SC.Exchange>
                <Typo variant="subtitle">Обмен</Typo>
                <Form onSubmit={onSubmit}>
                    <Field>
                        <SC.Label htmlFor="amountFrom">
                            <Typo>Сумма для обмена</Typo>   
                        </SC.Label>                    
                    </Field>
                    <Field>
                        <Input 
                            id="amountFrom" 
                            name="amountFrom" 
                            type="number"  
                            placeholder="100"
                            value={formValues.amountFrom}
                            max={maxAmount}
                            onChange={(e) => onChange(e.target.name, e.target.value)}
                        />
                        <Select
                            name={"currencyFrom"} 
                            value={formValues.currencyFrom}
                            accounts={accounts}
                            onChange={onChange} 
                        />      
                    </Field>
                    <Field>
                        <SC.Label htmlFor="amountTo">
                            <Typo>Результат обмена</Typo>    
                        </SC.Label>
                    </Field>
                    <Field>
                        <Input 
                            id="amountTo" 
                            name="amountTo" 
                            type="number"
                            value={formValues.amountTo} 
                            readOnly 
                        />
                        <Select
                            name={"currencyTo"} 
                            value={formValues.currencyTo} 
                            accounts={accounts}
                            onChange={onChange}
                        />    
                    </Field>
                    <SC.ButtonWrapper>
                        <Button disabled={disabled} type="submit">Обменять</Button>    
                    </SC.ButtonWrapper>
                </Form>    
            </SC.Exchange>
        </Card>
    )
};