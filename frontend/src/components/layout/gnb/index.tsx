import React, { FC, ReactNode } from 'react';
import * as Styled from './style';

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
        
      </Styled.Gnb>
    </GnbContainer>
  )  
}