import React, { FC, SyntheticEvent, ReactNode} from 'react';
import * as Styled from './style';

const {
  BaseWrapper,
  PlainButton
} = Styled;
export const BaseButton: FC<{
  buttonHandler?: (e: SyntheticEvent) => void,
  children?: ReactNode
}> = ({
  buttonHandler,
  children
}) => {
  
  return(
    <BaseWrapper>
      <PlainButton onClick={buttonHandler}>
        {children}
      </PlainButton>
    </BaseWrapper>
  )
}