import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component'; 
import { ProgressBar } from 'src/components/progress';
import { Router } from './route';
const HomePage = loadable(() => import(/* webpackChunkName: "HomePage" */'../../pages/homepage'));
const ItemPage = loadable(() => import(/* webpackChunkName: "ItemPage" */'../../pages/item'));
const ShopPage = loadable(() => import(/* webpackChunkName: "ShopPage" */ '../../pages/shop')); 
const ErrorPage = loadable(() => import(/* webpackChunkName: "Error" */'../../pages/error'))
export const AppRouter: FC = () => {
  return(
    <Switch>
      <Router/>
      <Route render={() => <ErrorPage/> } />
    </Switch>
  )
}