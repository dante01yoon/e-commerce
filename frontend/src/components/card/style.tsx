import styled from 'styled-components';

export const CardSection = styled.section`
`

export const CardItem = styled.div`
  width: 272px;
  display:flex;
  align-items: center; 
  background-color: aqua; 
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
      height: 248px;
      background-color: orange;
    }
    ${CardItem}:nth-child(2) {
      height: 328px;
      background-color: green;
    }
    ${CardItem}:nth-child(3) {
      height: 196px;
      background-color: purple;
    }
  }
  ${SemiContainer}:nth-child(2){
    ${CardItem}:nth-child(1) {
      height: 196px;
      background-color: gray;
    }
    ${CardItem}:nth-child(2) {
      height: 248px;
      background-color: orange;
    }
    ${CardItem}:nth-child(3) {
      height: 328px;
      background-color: purple;
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
