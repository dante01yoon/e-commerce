import React, { FC, useState } from 'react';
import * as Styled from './style';
import {  SHOP_DATA_TYPE } from 'src/models/data';
export const ShopComponent:FC<{
  data: SHOP_DATA_TYPE
}> = ({
  data  
}) => {
  const { title } = data;   
  return(
    <Styled.CategorySection>
      <Styled.ItemArticle>
        <Styled.ItemContainer>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Collections>
            {
              data.items.map((value,index) => {
                console.log(value);
                return(
                  <Styled.ItemBox url={value.imageUrl} key={value.id}>
                    
                  </Styled.ItemBox>
                )
              })
            }
          </Styled.Collections>
        </Styled.ItemContainer>
      </Styled.ItemArticle>
    </Styled.CategorySection>
  )
}