import React, { FC, ReactNode, useState, MouseEvent } from 'react';
import * as Styled from './style';
import mainLogo from 'src/asset/mainlogo.png'; 
import { SmartLink } from '@components/smart-link';
import { CartModal } from '@components/modal/cartModal';  
import { Icon } from '@components/icon';
import { iconMapKey } from '@components/icon/chart';
import { useOutsider } from 'src/libs/clickOutsideDetector';
export const GnbContainer: FC<{
  children: ReactNode
}> = ({
  children
}) => {
  return(
    <Styled.Container>
      {children}
    </Styled.Container>
  )
}

export const Gnb: FC = () => {
  const [ isModalOpen, setModalOpen] = useState(false); 
  const ref = React.useRef<HTMLDivElement | null>(null); 
  console.log('ref: ', ref);
  const checkModalOpened = () => {
    isModalOpen && setModalOpen(false);
  }
  useOutsider(ref, checkModalOpened); 
  const openModal = (e:MouseEvent) => {
    e.preventDefault();
    !isModalOpen && setModalOpen(true);
    isModalOpen && setModalOpen(false);
  }
  return(
    <GnbContainer>
      <Styled.Gnb>
        <SmartLink href="/">
          <Styled.MainLogo src={mainLogo}/>
        </SmartLink>
        <Styled.RightNav>
            <Styled.MenuContainer>
              <SmartLink href="/">
                <Styled.MenuItem>Women</Styled.MenuItem>
              </SmartLink>
              <SmartLink href="/">
                <Styled.MenuItem>Men</Styled.MenuItem>
              </SmartLink>
              <SmartLink href="/">
                <Styled.MenuItem>Outer</Styled.MenuItem>
              </SmartLink>
              <SmartLink href="/">
                <Styled.MenuItem>Shoes</Styled.MenuItem>
              </SmartLink>
              <SmartLink href="/">
                <Styled.MenuItem>Accessories</Styled.MenuItem>
              </SmartLink>
              <SmartLink href="/">
                <Styled.MenuItem>Login</Styled.MenuItem>
              </SmartLink>
              <SmartLink >
                <Styled.MenuItem onClick={openModal}>
                  <Icon type={iconMapKey.cart} ref={ref} /> 
                </Styled.MenuItem>
              </SmartLink>
              <CartModal isModalOpen={isModalOpen } /> 
            </Styled.MenuContainer>
        </Styled.RightNav>
      </Styled.Gnb>
    </GnbContainer>
  )  
}