import React, { FC, lazy } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from 'src/pages/homepage';
export const AppRouter: FC = () => {
  return(
      <BrowserRouter>
        <Switch>
            <Route exact path= "/" component={HomePage}/>
            <Route exact path= "/shop" render={() => lazy(() => import('src/pages/shop'))}/> 
            <Route render={() => lazy(() => import('src/components/error'))}/>
        </Switch>
      </BrowserRouter>
  )
}