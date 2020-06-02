import styled, { css } from 'styled-components';

export const IconBox = styled.div<{
    color?: string,
    size?: number 
    backgroundColor?: string
}>`
    cursor:pointer;
    height:100%;
    display:flex; 
    align-items: center;
    & svg{
        display:block;
        background-color: ${p => {
            const {backgroundColor} = p 
            return css`${backgroundColor}` 
        }};
        & > path {
        }
    }
        
`