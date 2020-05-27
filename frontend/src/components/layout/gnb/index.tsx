import React, { FC, ReactNode } from 'react';
import * as Styled from './style';
import mainLogo from 'src/asset/mainlogo.png'; 
import { SmartLink } from '@components/smart-link'; 
import { Icon } from '@components/icon';
import { iconMapKey } from '@components/icon/chart'; 
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
              <SmartLink href="/">
                <Styled.MenuItem>
                  <Icon type={iconMapKey.cart} /> 
                </Styled.MenuItem>
              </SmartLink>
            </Styled.MenuContainer>
        </Styled.RightNav>
      </Styled.Gnb>
    </GnbContainer>
  )  
}