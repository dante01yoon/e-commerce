import React, { FC } from 'react';
import * as Styled from './style';
import {INITIAL_DATA} from 'src/models/data';
export const ShopComponent:FC = ({}) => {
  const DUMMY_DATA = INITIAL_DATA[0];
  const {imageUrl,price,title, name} = DUMMY_DATA; 
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
            <Styled.DetailParagraph>{price}</Styled.DetailParagraph>
          </Styled.DetailBox>
        </Styled.SpecArticle>
      </Styled.ItemSection>
    </Styled.ItemContainer>
  )
}