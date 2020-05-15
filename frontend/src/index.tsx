import React from 'react';
import ReactDOM,{ hydrate } from 'react-dom';
declare let module: any
import App from 'src/app'; 
import { loadableReady } from '@loadable/component';
import { BrowserRouter } from 'react-router-dom';

loadableReady(() => {
  const rootElement = document.getElementById('root');
  hydrate(
    <BrowserRouter>
      <App/>
    </BrowserRouter>,
    rootElement
  )
}); 

if(module.hot){
  module.hot.accept();
}