import React, { FC, lazy } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import {HomePage} from 'src/pages/homepage';
import LazyLoader from './loading';
import {ErrorPage} from 'src/components/error'; 
//
export const AppRouter: FC = () => {
  return(
    <BrowserRouter>
      <Switch>
          <Route exact path= "/" render={()=> <LazyLoader Component={HomePage} />}/>
          <Route component={lazy(() => import('src/components/error'))}/>
      </Switch>
    </BrowserRouter>
  )
}