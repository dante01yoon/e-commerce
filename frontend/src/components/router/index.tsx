import React, { FC, lazy } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import LazyLoader from './loading';
import {ErrorPage} from 'src/components/error'; 
import {Shop} from 'src/pages/shop';
const HomePage = lazy(() => import('src/pages/homepage'));
const ItemPage = lazy(() => import('src/pages/item'));
const ShopPage = lazy(() => import('src/pages/shop')); 
export const AppRouter: FC = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path= "/" render={()=> <LazyLoader Component={HomePage} />}/>
        <Route path="/item" render={() => <LazyLoader Component={ItemPage}/>}/>
        <Route path="/shop" render={() => <LazyLoader Component={ShopPage}/>}/>
        <Route render={()=> <LazyLoader Component={ErrorPage}/>}/>
      </Switch>
    </BrowserRouter>  
  )
}