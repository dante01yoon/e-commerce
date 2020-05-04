import React, { FC, ReactNode } from 'react';
import styled, {ThemeProvider, createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';
const GlobalStyle = createGlobalStyle`
  ${reset}; 
`
export const theme = {

}

export const GlobalThemeProvider: FC<{
  children: ReactNode
}> = ({
  children
}) => {
  return(
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      {children}
    </ThemeProvider>
  )
}

