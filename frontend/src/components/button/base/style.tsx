import styled from 'styled-components';

export const BaseWrapper = styled.div`
 padding: 8px 0;
 height: -webkit-fill-available;
 display:flex;
 justify-content: center;
 align-items: center;
 
`

export const PlainButton = styled.button`
  border: 1px solid ${p=>p.theme.colors.lightBlack}; 
  padding: 16px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  cursor: pointer;
  & :hover {
    background-color: ${p=>p.theme.colors.black};
    color: ${p=>p.theme.colors.lightWhite};
  }
`