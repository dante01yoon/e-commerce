import styled from 'styled-components'; 

export const ErrorText = styled.p`
  color: red;
  
`
export const InputNumber = styled.input`
  box-sizing: border-box;
  text-align: center;
  height: 40px; 
  border: 1px solid: ${p => p.theme.colors.lightWhite};
`;
export const Button = styled.button`
  text-align: center;
  width: 40px;
  height: 40px; 
  border: 1px solid: ${p => p.theme.colors.lightWhite};
`;