import styled from "styled-components";

export const Typo = styled.p`
    margin: 0;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;  
    text-overflow: ellipsis;

    &[data-tone='muted'] {
        color: #78778B;
    }

    

    &[data-variant='title'] {
        font-size: 25px;
        font-weight: 600;
        line-height: 31px;
    }

    &[data-variant='subtitle'] {
        font-size: 18px;
        font-weight: 600;
        line-height: 22px;
    }

    &[data-variant='body'] {
        font-size: 14px;
        font-weight: 500;
        line-height: 17px;
    }

    &[data-variant='caption'] {
        font-size: 12px;
        font-weight: 400;
        line-height: 15px;
        color: #929EAE;
    }

    &[data-tone='error'] {
        color: #E5363D;
    }
`