import React, { FC } from 'react';
import { PageContainer } from 'src/components/layout/page-container';
import { GlobalThemeProvider } from 'src/theme'
export const App: FC = () => {
  return(
    <GlobalThemeProvider>
      <PageContainer>

      </PageContainer>
    </GlobalThemeProvider> 
  )
};