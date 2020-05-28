import React, { FC } from 'react';
import * as Styled from './style';

const { 
  ModalBox
} = Styled; 
export const CartModal:FC<{
  isModalOpen: boolean
}> = ({
  isModalOpen 
}) => {

  return(
    <>
      {
        isModalOpen && (
          <ModalBox>

          </ModalBox>
            
        )
      }
    </>
  )
}
