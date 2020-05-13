import React, { FC, useState } from 'react';
import * as Styled from './style';
import { INITIAL_DATA } from 'src/models/data';
import { ItemCountForm } from 'src/models/item-count'
import { CountForm } from 'src/components/count-form';
export const ItemComponent:FC = ({}) => {
  const DUMMY_DATA = INITIAL_DATA[0]; 
  const {id,imageUrl,price,title, name} = DUMMY_DATA; 
  const partialData:Omit<ItemCountForm, 'count'> = {
    id,
    price,
    name
  }
  return(
    <Styled.ItemContainer>
      <Styled.ItemSection>
        <Styled.ItemArticle>
          <Styled.Title>About</Styled.Title>
          <Styled.ImageBox imageUrl={imageUrl}/>
        </Styled.ItemArticle>
        <Styled.SpecArticle>
          <Styled.Title>Details</Styled.Title>
          <Styled.DetailBox>
            <Styled.DetailTitle>{title}</Styled.DetailTitle>
            <Styled.DetailParagraph>{name}</Styled.DetailParagraph>
            <Styled.DetailParagraph>{price}$</Styled.DetailParagraph>
            <CountForm partialData={partialData}/>
          </Styled.DetailBox>
        </Styled.SpecArticle>
      </Styled.ItemSection>
    </Styled.ItemContainer>
  )
}
