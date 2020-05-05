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
export const MainLogo = styled.img`
  width: 56px;
  height:56px;
  margin-left: 32px;
`;
export const MenuContainer= styled.ul`
  
`;
export const MenuItem = styled.li`
  float:left;
  margin-right:24px;
  height:56px;
  ${p => p.theme.typo.nav14black}
  text-transform: uppercase;
  cursor:pointer; 
`; 
export const RightNav = styled.div`
  float: right;
  margin-right: 32px; 
`
const Styled = {
  Container,
  Gnb,
  MainLogo,
  MenuContainer,
  MenuItem, 

  RightNav
}
export default Styled ; 