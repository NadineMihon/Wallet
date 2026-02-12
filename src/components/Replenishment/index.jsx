import { Card } from "../ui/Card";
import { Field } from "../ui/Field";
import { Form } from "../ui/Form";
import { Typo } from "../ui/Typo";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { Button } from "../ui/Button";

import * as SC from "./styles";

export const Replenishment = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Пополнение');
    };

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
                        <Input id="amount" name="amount" type="number"  placeholder="100"/>
                        <Select />      
                    </Field>
                    <SC.ButtonWrapper>
                        <Button type="submit">Пополнить</Button>    
                    </SC.ButtonWrapper>
                </Form>    
            </SC.Replenishment>
        </Card>
    )
}