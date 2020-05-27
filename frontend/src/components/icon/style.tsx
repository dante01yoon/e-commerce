import styled from 'styled-components';

export const IconBox = styled.div<{
    color?: string,
    size?: number 
    backgroundColor?: string
}>`
    
    & svg{
        
        & > path {
            color: ${p => p.theme.colors.p.color};
            backgroundColor = ${p => p.theme.colors.p.backgroudnColor};
            size: ${p=> p.size}; 
        }
    }
        
`