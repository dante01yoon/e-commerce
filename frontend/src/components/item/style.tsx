import styled from 'styled-components'; 
export const ItemContainer = styled.div`
  width: 880px;
  margin: 0 auto;
  padding: 16px 0; 
`
export const ItemSection = styled.section`
  display: flex;
`;

export const ItemArticle = styled.article`
  width: 504px;
`;

export const SpecArticle = styled.article`
  margin-left: 88px;
  width: 288px;
  box-sizing: border-box;
  `;
export const Title = styled.h3`
  ${p=>p.theme.typo.item24black}
`;
export const ImageBox = styled.div<{imageUrl: string }>`
  margin-top: 16px;
  width: 100%;
  height: 512px;
  box-sizing: border-box;
  border-radius: 8px;
  background-image: url(${p => p.imageUrl});
  background-repeat: no-repeat; 
  background-size:cover; 
`;
export const DetailBox = styled.div`
  box-sizing: border-box;
  margin-top: 16px; 
  padding: 24px 16px;
  width: 100%;
  height: 512px;
  border: 1px solid ${p => p.theme.colors.letterBlack};
`;
export const DetailTitle = styled.h4`
  ${p=>p.theme.typo.detail20black}
  margin-bottom: 8px;
`; 
export const DetailParagraph = styled.p`
  color: ${p=>p.theme.colors.aquaBlue};
  margin-bottom: 8px;
  `;