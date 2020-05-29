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

export const ItemWrapper = styled.div`
  height:280px;
  display:flex;
  flex-direction: column;
  overflow-y: scroll; 
  
`;

export const ItemBox = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 16px; 
`
export const Img = styled.div<{
  img: string;
}>`
  height: 80px;
  width: 64px;
  background-image: url(${p => p.img});
  background-repeat: no-repeat; 
  background-size:cover; 
`;

export const Description = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 8px;
  ${p => p.theme.typo.item16Desblack}
`;

// export const Styled = {
//   ModalBox,
//   ItemBox,
//   ItemWrapper
// }; 

