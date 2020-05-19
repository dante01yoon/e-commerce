<<<<<<< HEAD
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
=======
import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component'; 

const HomePage = loadable(() => import(/* webpackChunkName: "HomePage" */'../../pages/homepage'));
const ItemPage = loadable(() => import(/* webpackChunkName: "ItemPage" */'../../pages/item'));
const ShopPage = loadable(() => import(/* webpackChunkName: "ShopPage" */ '../../pages/shop')); 
const ErrorPage = loadable(() => import(/* webpackChunkName: "Error" */'../error'))
export const AppRouter: FC = () => {
  return(
      <Switch>
        <Route exact path= "/" render={()=> <HomePage/>}/>
        <Route exact path="/item" render={() => <ItemPage/>}/>
        <Route path="/item/:id" render={() => <ItemPage/>}/> 
        <Route path="/shop" render={() => <ShopPage/>}/>
        <Route path="/shop/:category" render={() => <ShopPage/>}/>
        <Route path="/shop/:category/:id" render={() => <ShopPage/>}/>
        <Route render={()=> <ErrorPage/>}/>
      </Switch>
>>>>>>> 3b9f89e1b144d476148dbe537910e7c4f339f5e9
  )
}