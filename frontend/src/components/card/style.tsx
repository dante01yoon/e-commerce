import styled from 'styled-components';

export const CardSection = styled.section`
`

export const CardItem = styled.div`
  margin: 16px 8px;
  width: 272px;
  display:flex;
  align-items: center; 
  cursor:pointer; 
  border-radius: 8px;
`;
export const SemiContainer = styled.div`
  flex-flow: column wrap;
  align-items: flex-start; 
`
export const Container = styled.div`
  overflow: auto; 
  margin: 0 auto;
  width: 1128px;
  display:flex;
  justify-content: center;
  flex-flow: row wrap;
  ${SemiContainer}:nth-child(2n-1){
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
  ${SemiContainer}:nth-child(2n){
    ${CardItem}:nth-child(1) {
      margin-top: 16px;
      height: 352px;
      background-color: gray;
    }
    ${CardItem}:nth-child(2) {
      height: 248px;
      background-color: aqua;
    }
    ${CardItem}:nth-child(3) {
      height: 344px;
      background-color: yellow;
    }
  }
  ${SemiContainer}:nth-child(3n){
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
export const Title = styled.div`
  :hover{
    display: block 
  }
`;
export const CardImage = styled.div<{
  url: string
}>`
  background-image: url(${p => p.url});
  background-repeat: no-repeat; 
  width: 100%;
  height: 100%; 
`; 

export const Price = styled.div`
`; 