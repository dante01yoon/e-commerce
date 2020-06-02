import React, { FC, SyntheticEvent, ReactNode} from 'react';
import * as Styled from './style';

interface ButtonProps{
  color?: string
  backgroundColor?: string  
}; 
const {
  BaseWrapper,
  PlainButton
} = Styled;
export const BaseButton: FC<ButtonProps> = ({
  children,
  ...props
}) => {
  
  return(
    <BaseWrapper>
      <PlainButton {...props} >
        {children}
      </PlainButton>
    </BaseWrapper>
  )
}