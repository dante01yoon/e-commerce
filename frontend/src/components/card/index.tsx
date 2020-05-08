import React, { FC } from 'react';
import * as Styled from './style';
import { INITIAL_DATA } from 'src/models/data'; 
export const CardContainer:FC = () => {
  let items = new Array(); 
  let slicedData = INITIAL_DATA.slice();
  while(slicedData.length > 0){
    let cardItems = new Array(); 
    for( const [index, value] of slicedData.splice(0,3).entries()){
      cardItems.push(<Styled.CardItem key={index}/>)
    }
    items = [...items, 
      <Styled.SemiContainer key={Math.floor(~~1*Math.random() * 0xff)}>
        {cardItems}
      </Styled.SemiContainer>
    ]
  }
  console.log('slicedData: ', slicedData)
  console.log('items: ', items);
  return(
    <section>
      <Styled.Container>
        {items}
      </Styled.Container>
    </section>
  )
}

export const Card:FC = () => {
  return(
    <Styled.CardItem>
      This is CardItem 
    </Styled.CardItem>
  )
}