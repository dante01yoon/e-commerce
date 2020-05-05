import React, { FC } from 'react';
import * as Styled from './style';
import { SHOP_DATA } from 'src/models/data'; 
export const CardContainer:FC = () => {
  return(
    <section>
      <Styled.Container>
        {
          SHOP_DATA.map((value,index) => {
            return <Card key={index}/>
          })
        }
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