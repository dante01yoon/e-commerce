import React, { FC, ReactNode } from 'react';
import {ThemeProvider, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { Theme } from './interface';
import { typo } from './typo'; 
import { colors } from './colors';
const GlobalStyle = createGlobalStyle`
  ${reset}; 
  body {
    font-family: Lato, system-ui, -apple-system, BlinkMacSystemFont;
  }
  a{
    text-decoration: none;
  }
  ul,ol{
    list-style: none;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }
  button{
    -moz-appearance: none;
    -webkit-appearance: none;
    border-style: solid;
    background-color:inherit;
  }
`
export const theme:Theme = {
  typo,
  colors 
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

