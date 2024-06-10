import styled from "styled-components"
import { theme } from "../styles/theme";

export const CardContainer = styled.div`
    background: ${props => props.theme.cardGradient};
    max-widht: 41.2rem;
    padding: 3.2rem;
    border-radius: 3rem;
    

    h1 {
    font-size: 2.8rem;
    color: ${props => props.theme.white};
    margin-bottom: 1.5rem;
    text-align: center;
    }

    p {
        font-size: 1.5rem;
        line-heigh: 2.4rem;
        color: ${props => props.theme.textColor};
        text-align: center;
    }
`

export const IconContainer = styled.div``

export const ButtonCointainer = styled.div``