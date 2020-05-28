import styled from 'styled-components';

export const ModalBox = styled.div<{
  color?: string
}>`
  border: 1px solid ${p=> p.theme.colors.lightBlack};
  display: flex; 
  flex-direction: column;
  background-color: ${p=>p.color}; 
  position: relative;
  top: -8px;
  right: -248px;
  
  width: 240px;
  height: 330px; 
  padding: 20px;
  
`

export const Styled = {
  ModalBox
}; 

