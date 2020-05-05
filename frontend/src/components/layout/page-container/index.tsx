import React, { FC } from 'react';
import * as Styled from './style'; 
import { Gnb } from 'src/components/layout/gnb'; 
export const PageContainer:FC = () => {
  return(
    <Styled.Container>
      <Gnb/>
    </Styled.Container>
  );
}

