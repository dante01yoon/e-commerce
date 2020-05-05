import React, { FC, ReactNode } from 'react';
import * as Styled from './style';

export const SmartLink: FC<{
  children?: ReactNode,
  href?: string 
}> = ({
  children,
  href
}) => {
  return(
    <a href={href}>
      {children}
    </a>
  )
}