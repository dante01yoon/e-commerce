import styled from 'styled-components';

export const CardSection = styled.section`
`

export const CardItem = styled.div`
  margin: 8px 8px;
  width: 272px;
  display:flex;
  align-items: center; 
  cursor:pointer; 
`;
export const SemiContainer = styled.div`
  flex-flow: column wrap;
`
export const Container = styled.div`
  overflow: auto; 
  margin: 0 auto;
  width: 1128px;
  display:flex;
  justify-content: center;
  flex-flow: row wrap;
  ${SemiContainer}:nth-child(1){
    ${CardItem}:nth-child(1) {
      height: 336px;
      background-color: orange;
    }
    ${CardItem}:nth-child(2) {
      height: 344px;
      background-color: green;
    }
    ${CardItem}:nth-child(3) {
      height: 368px;
      background-color: purple;
    }
  }
  ${SemiContainer}:nth-child(2){
    ${CardItem}:nth-child(1) {
      margin-top: 16px;
      height: 352px;
      background-color: gray;
    }
    ${CardItem}:nth-child(2) {
      height: 360px;
      background-color: aqua;
    }
    ${CardItem}:nth-child(3) {
      height: 344px;
      background-color: yellow;
    }
  }
  ${SemiContainer}:nth-child(3){
    ${CardItem}:nth-child(1) {
      height: 328px;
      background-color: blue;
    }
    ${CardItem}:nth-child(2) {
      height: 328px;
      background-color: black;
    }
    ${CardItem}:nth-child(3) {
      height: 384px;
      background-color: green;
    }
  }
`
