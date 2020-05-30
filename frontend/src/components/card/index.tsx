import React, { FC } from 'react';
import * as Styled from './style';
import { INITIAL_DATA, CARD_ITEM_TYPE, INITIAL_DATA_TYPE } from 'src/models/data'; 
import { ProgressBar } from '@components/progress';
import Icon from '../icon';
import { iconMapKey } from '../icon/chart';
export const CardContainer:FC<{
  data: INITIAL_DATA_TYPE,
  isLoading: boolean
}> = ({
  data,
  isLoading 
}) => {
  const clickHeart = (itemInfo: CARD_ITEM_TYPE) => {
    const cart = localStorage.getItem('cart')  
    if(cart){
      const cartItems = JSON.parse(cart);
      cartItems?.push(itemInfo);
      localStorage.setItem('cart',JSON.stringify(cartItems));  
    } else {
      localStorage.setItem('cart',JSON.stringify([itemInfo]));  
    }
  }
  const initialData = data; 
  let items = new Array(); 
  let slicedData = initialData.slice();
  while(slicedData.length > 0){
    let cardItems = new Array(); 
    for( const [index, value] of slicedData.splice(0,3).entries()){
      cardItems.push(<Card key={index} shopItems={value} onClick={clickHeart}/>)
    }
    items = [...items, 
      <Styled.SemiContainer key={Math.floor(~~1*Math.random() * 0xff)}>
        {cardItems}
      </Styled.SemiContainer>
    ]
  }

  return(
    <section>
      <Styled.Container>
        {
          isLoading 
            ? 
          <ProgressBar/>
            :
          items
        }
      </Styled.Container>
    </section>
  )
}

export const Card:FC<{
  onClick: (itemInfo: CARD_ITEM_TYPE) => void
  shopItems: CARD_ITEM_TYPE
}> = ({
  onClick, 
  shopItems 
}) => {
  const { name, title, imageUrl, price, id} = shopItems;
  return(
    <Styled.CardItem>
      <Styled.CardImage url={imageUrl}/>
      <Styled.ContentBox>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Title>{name}</Styled.Title>
        <Styled.Price>{price}</Styled.Price>
        <Icon type={iconMapKey.heart} color={"white"} onClick={() => onClick(shopItems)}/>
      </Styled.ContentBox>
    </Styled.CardItem>
  )
}

export default CardContainer;