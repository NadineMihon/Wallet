import styled from "styled-components";

export const Select = styled.select`
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    color: #1B212D;
    text-align-last: center;
    padding: 10px 30px;
    border-radius: 10px;
    background-color: #c8ee44;
    cursor: pointer;
    outline: none;

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:disabled {
        opacity: 0.5;
        cursor: default;
        border-color: #c8ee4480;
    }
`

export const Option = styled.option `
    background-color: #c8ee44;
    color: #1B212D;
`