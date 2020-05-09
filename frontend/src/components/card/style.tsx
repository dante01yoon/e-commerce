import styled from 'styled-components';

export const CardSection = styled.section`
`

export const CardItem = styled.div`
  position: relative;
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
    }
    ${CardItem}:nth-child(2) {
      height: 344px;
    }
    ${CardItem}:nth-child(3) {
      height: 368px;
    }
  }
  ${SemiContainer}:nth-child(2n){
    margin-top: 8px; 
    ${CardItem}:nth-child(1) {
      margin-top: 16px;
      height: 352px;
    }
    ${CardItem}:nth-child(2) {
      height: 248px;
    }
    ${CardItem}:nth-child(3) {
      height: 344px;
    }
  }
  ${SemiContainer}:nth-child(3n){
    ${CardItem}:nth-child(1) {
      height: 264px;
    }
    ${CardItem}:nth-child(2) {
      height: 328px;
    }
    ${CardItem}:nth-child(3) {
      height: 384px;
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
  border-radius: 8px;
  background-image: url(${p => p.url});
  background-repeat: no-repeat; 
  background-size:cover; 
  width: 100%;
  height: 100%; 
`; 

export const Price = styled.div`
`; 
export const ContentBox = styled.div`
  display:flex;
  position:absolute;
  bottom: 0;
  padding: 16px;
  color: white;
  
`;