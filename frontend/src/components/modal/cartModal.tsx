import React, { FC, forwardRef, RefObject } from 'react';
import * as Styled from './style';

const { 
  ModalBox
} = Styled; 

type Props = {
  color?: string;
  isModalOpen: boolean
}
type Ref = HTMLDivElement | null; 
export const CartModal = forwardRef<Ref,Props>((
  props,
  ref
) => {
  const { color = '#ffffff', isModalOpen } = props; 


  return(
    <>
      {
        isModalOpen && (
          <ModalBox color={color} ref={ref}>
            
          </ModalBox>
            
        )
      }
    </>
  )
}); 
