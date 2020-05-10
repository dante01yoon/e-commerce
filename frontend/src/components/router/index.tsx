import React, { FC } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import {HomePage} from 'src/pages/homepage';
import LazyLoader from './loading';
import {ErrorPage} from 'src/components/error'; 
export const AppRouter: FC = () => {
  return(
    <BrowserRouter>
      <Switch>
          <Route exact path= "/" render={()=><LazyLoader component={HomePage}/>} />
          <Route component={ErrorPage}/>
      </Switch>
    </BrowserRouter>
  )
}