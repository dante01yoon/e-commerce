import React from 'react';
import { hydrate } from 'react-dom';
declare let module: any
import App from 'src/app'; 
import { loadableReady } from '@loadable/component';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'src/redux/configureStore';

const store = configureStore({}); 

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
  module.hot.accept('./app', App);
}