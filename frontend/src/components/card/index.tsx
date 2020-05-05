import React, { FC } from 'react';
import * as Styled from './style';
import { SHOP_DATA } from 'src/models/data'; 
export const CardContainer:FC = () => {
  let slicedData = SHOP_DATA[0].items.slice();
  const items = []; 
  while(slicedData.length > 0){
    for( const [index, value] of slicedData.splice(0,3).entries()){
      items.push(<Styled.CardItem key={index}/>)
    }
  }
  return(
    <section>
      <Styled.Container>
        
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