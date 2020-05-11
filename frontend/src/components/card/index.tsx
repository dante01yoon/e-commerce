import React, { FC } from 'react';
import * as Styled from './style';
import { INITIAL_DATA, CARD_ITEM_TYPE } from 'src/models/data'; 
export const CardContainer:FC = () => {
  let items = new Array(); 
  let slicedData = INITIAL_DATA.slice();
  console.log(slicedData.length);
  while(slicedData.length > 0){
    let cardItems = new Array(); 
    for( const [index, value] of slicedData.splice(0,3).entries()){
      cardItems.push(<Card key={index} shopItems={value}/>)
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
        {items}
      </Styled.Container>
    </section>
  )
}

export const Card:FC<{
  shopItems: CARD_ITEM_TYPE
}> = ({
  shopItems 
}) => {
  const { name, title, imageUrl, price} = shopItems;
  return(
    <Styled.CardItem>
      <Styled.CardImage url={imageUrl}/>
      <Styled.ContentBox>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Title>{name}</Styled.Title>
        <Styled.Price>{price}</Styled.Price>
      </Styled.ContentBox>
    </Styled.CardItem>
  )
}

export default CardContainer;