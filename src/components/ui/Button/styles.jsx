import styled from "styled-components";

export const Button = styled.button `
    font-size: 16px;
    font-weight: 600;
    line-height: 17px;
    color: #1B212D;
    text-align: center;
    border-radius: 10px;
    border: none;
    padding: 12px 20px;
    background-color: #C8EE44;
    cursor: pointer;

    &:hover {
        background-color:#9fc710;
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;

        &:hover {
           background-color:#c9ee4488;
        }
    }
`