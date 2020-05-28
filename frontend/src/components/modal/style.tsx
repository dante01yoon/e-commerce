import styled from 'styled-components';

export const ModalBox = styled.div`
  border: 1px solid ${p=> p.theme.colors.lightBlack};
  display: flex; 
  flex-direction: column;
  position: absolute;
  
  
  width: 240px;
  height: 330px; 
  padding: 20px;
  
`

export const Styled = {
  ModalBox
}; 

