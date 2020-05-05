import React, { FC, ReactNode } from 'react';
import * as Styled from './style'; 
import { Gnb } from 'src/components/layout/gnb'; 
export const PageContainer:FC<{
  children: ReactNode
}> = ({
  children
}) => {
  return(
    <Styled.Container>
      <Gnb/>
      <Styled.Main>
        {children}
      </Styled.Main>
    </Styled.Container>
  );
}

