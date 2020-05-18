import React from 'react';
import { hydrate } from 'react-dom';
declare let module: any
import App from 'src/app'; 
import { loadableReady } from '@loadable/component';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@modules/index';

loadableReady(() => {
  const rootElement = document.getElementById('root');
  hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>,
    rootElement
  )
}); 

if(module.hot){
  module.hot.accept();
}