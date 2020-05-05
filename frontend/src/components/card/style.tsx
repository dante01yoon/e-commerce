import styled from 'styled-components';

export const CardSection = styled.section`
`

export const CardItem = styled.div`
  width: 272px;
  height: 384px; 
  display:flex;
  align-items: center; 
  background-color: aqua; 
`;

export const Container = styled.div`
  overflow: auto; 
  margin: 0 auto;
  width: 1128px;
  display:flex;
  justify-content: center;
  flex-flow: column wrap;
  ${CardItem}:nth-child(2n+3) {
    height: 248px;
    background-color: orange;
  }
  
`