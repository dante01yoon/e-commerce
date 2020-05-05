import React, { FC } from 'react';
import { GlobalThemeProvider } from 'src/theme'
import { HomePage } from './pages/homepage';
export const App: FC = () => {
  return(
    <GlobalThemeProvider>
      <HomePage/>
    </GlobalThemeProvider> 
  )
};