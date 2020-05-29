import React, { FC, forwardRef, RefObject } from 'react';
import * as Styled from './style';
import { BaseButton } from '../button';

const { 
  ModalBox,
  ItemWrapper, 
  ItemBox,
  Img,
  Description,
} = Styled; 

type ItemProps = {
  img: string; 
  title: string;
  count: number;
  price: number;
}
export const Item: FC<{
  information: ItemProps
}> = ({
  information
}) => {
  const { img, title, count, price } = information
  return(
    <ItemBox>
      <Img img={img}/>
      <Description>
        <span>{title}</span>
        <span>{count}X ${price}</span>
      </Description>
    </ItemBox>
      
  )
}




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
  
  const dummy: ItemProps = {
    img: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
    title: 'Grey Brim',
    count: 1,
    price: 25
  }
  return(
    <>
      {
        isModalOpen && (
          <ModalBox color={color} ref={ref}>
            <ItemWrapper>
              <Item information={dummy}/>
            </ItemWrapper>
            <BaseButton/> 
          </ModalBox>
        )
      }
    </>
  )
}); 
