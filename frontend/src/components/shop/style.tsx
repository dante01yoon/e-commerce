import styled from 'styled-components';  

export const CategorySection = styled.section`
  
`;
export const ItemArticle = styled.article`
  
`; 
export const Title = styled.h3`
  width: 100%;
  font-size:40px; 
  font-weight: 500; 
  color: ${p=>p.theme.colors.blackLetter};  
`;
export const ItemContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column; 
  margin: 40px 0; 
`;
export const Collections = styled.div`
  padding: 40px 0 ; 
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 16px;
`
export const ItemBox = styled.div<{
  url: string;
}>`
  display:flex;
  border-radius: 8px;
  background-image: url(${p=> p.url});
  background-size: cover;
  background-position: center;  
  width: 100%; 
  height: 360px;
`