import React, { FC, ReactNode } from 'react';
import * as Styled from './style'; 
import { Gnb } from 'src/components/layout/gnb'; 
export const PageContainer:FC<{
  children: ReactNode
}> = ({
  children
}) => {
  return(
    <>
      <Gnb/>
      <Styled.Main>
        <Styled.Container>
          {children}
        </Styled.Container>
      </Styled.Main>
    </>
  );
}

