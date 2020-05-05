import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 56px;  
  ${p=>p.theme.typo.nav14black}; 
`;

export const Gnb = styled.nav`
  position:fixed;
  z-index:500;
  height:56px;
  width: 100%;
`;
const Styled = {
  Container,
  Gnb
}
export default Styled ; 