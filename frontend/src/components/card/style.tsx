import styled from 'styled-components';
import {IconBox } from '@components/icon/style'; 
export const CardSection = styled.section`
`
export const ContentBox = styled.div`
  border-radius: 8px;
  position:absolute;
  bottom: 0;
  padding: 16px;
  color: white;
  opacity: 0;
  display: block;   
  z-index:500;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease 0s; 
  width: 100%; 
  box-sizing: border-box;
  & > ${IconBox}{
    height:auto;
    position:absolute;
    top:48%;
    right: 16px;
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
export const CardItem = styled.div`
  position: relative;
  margin: 16px 8px;
  width: 272px;
  display:flex;
  align-items: center; 
  border-radius: 8px;
  &:hover ${ContentBox}{
    
    opacity: 1; 
    + div {
      background-size: 110%; 
    }
  }
`;

export const SemiContainer = styled.div`
  flex-flow: column wrap;
  align-items: flex-start; 
`
export const Container = styled.div`
  margin: 0 auto;
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


export const Price = styled.div`
`; 
