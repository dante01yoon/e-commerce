import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { GlobalThemeProvider } from 'src/theme'
import { PageContainer } from './components/layout/page-container';
import { AppRouter } from 'src/components/router';
const App: FC = () => {
  return(
    <GlobalThemeProvider>
        <Helmet>
          <title>S4 commerce</title>
        </Helmet>
        <PageContainer>
          <AppRouter/>
        </PageContainer>
    </GlobalThemeProvider> 
  )
};

export default App; 