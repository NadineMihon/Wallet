import { Card } from "../ui/Card";
import { Typo } from "../ui/Typo";
import { Form } from "../ui/Form";
import { Field } from "../ui/Field";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { Button } from "../ui/Button";

import * as SC from "./styles";

export const Exchange = ({ accounts }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Обмен');
    };

    return (
        <Card>
            <SC.Exchange>
                <Typo variant="subtitle">Обмен</Typo>
                <Form onSubmit={onSubmit}>
                    <Field>
                        <SC.Label htmlFor="fromAmount">
                            <Typo>Сумма для обмена</Typo>   
                        </SC.Label>                    
                    </Field>
                    <Field>
                        <Input id="fromAmount" name="fromAmount" type="number"  placeholder="100"/>
                        <Select accounts={accounts} />      
                    </Field>
                    <Field>
                       <Typo>Обменять на:</Typo>
                       <Select accounts={accounts}/> 
                    </Field>
                    <SC.ButtonWrapper>
                        <Button type="submit">Обменять</Button>    
                    </SC.ButtonWrapper>
                </Form>    
            </SC.Exchange>
        </Card>
    )
};