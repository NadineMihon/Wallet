import { useState } from "react";
import { Card } from "../ui/Card";
import { Field } from "../ui/Field";
import { Form } from "../ui/Form";
import { Typo } from "../ui/Typo";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { Button } from "../ui/Button";

import * as SC from "./styles";

export const Replenishment = ({ accounts, topUpAccount }) => {
    const initialValues = { amount: '', currency: 'RUB', };

    const [formValues, setFormValues] = useState(initialValues);

    const onChange = (name, value) =>{
        setFormValues({ ...formValues, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        topUpAccount(formValues);
        setFormValues(initialValues);
    };

    const disabled = !formValues.amount || !formValues.currency;

    return (
        <Card>
            <SC.Replenishment>
                <Typo variant="subtitle">Пополнение</Typo>
                <Form onSubmit={onSubmit}>
                    <Field>
                        <SC.Label htmlFor="amount">
                            <Typo>Сумма для пополнения</Typo>   
                        </SC.Label>                    
                    </Field>
                    <Field>
                        <Input 
                            id="amount" 
                            name="amount" 
                            type="number"  
                            placeholder="100"
                            value={formValues.amount}
                            onChange={(e) => onChange(e.target.name, e.target.value)}
                        />
                        <Select 
                            name={"currency"} 
                            value={formValues.currency}
                            onChange={onChange}
                            accounts={accounts}
                        />      
                    </Field>
                    <SC.ButtonWrapper>
                        <Button type="submit" disabled={disabled}>Пополнить</Button>    
                    </SC.ButtonWrapper>
                </Form>    
            </SC.Replenishment>
        </Card>
    )
};