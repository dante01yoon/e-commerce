import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component'; 

const HomePage = loadable(() => import(/* webpackChunkName: "HomePage" */'../../pages/homepage'));
const ItemPage = loadable(() => import(/* webpackChunkName: "ItemPage" */'../../pages/item'));
const ShopPage = loadable(() => import(/* webpackChunkName: "ShopPage" */ '../../pages/shop')); 
const ErrorPage = loadable(() => import(/* webpackChunkName: "Error" */'../../pages/error'))
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
  )
}