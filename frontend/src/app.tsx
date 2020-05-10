import React, { FC } from 'react';
import { GlobalThemeProvider } from 'src/theme'
import { PageContainer } from './components/layout/page-container';
import { AppRouter } from 'src/components/router';
export const App: FC = () => {
  return(
    <GlobalThemeProvider>
      <PageContainer>
        <AppRouter/>
      </PageContainer>
    </GlobalThemeProvider> 
  )
};