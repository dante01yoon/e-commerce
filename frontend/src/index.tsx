import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'src/app';
declare let module: any

ReactDOM.render(<App/> ,document.querySelector('#root')); 

if(module.hot){
  module.hot.accept();
}