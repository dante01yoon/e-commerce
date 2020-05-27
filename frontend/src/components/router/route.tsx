import React, { FC, ReactType } from 'react'; 
import { Dispatch } from 'redux';
import { Switch, Route } from 'react-router-dom';
import loadable, { LoadableComponent } from '@loadable/component'; 
export type RouteType = {
  path: string
  exact?: boolean
  component?: ReactType
  loadable?: boolean 
  fetchInitialData?: (req: any) => Dispatch
}

const HomePage = loadable(() => import(/* webpackChunkName: "HomePage" */'../../pages/homepage'));
const ItemPage = loadable(() => import(/* webpackChunkName: "ItemPage" */'../../pages/item'));
const ShopPage = loadable(() => import(/* webpackChunkName: "ShopPage" */ '../../pages/shop')); 
const ErrorPage = loadable(() => import(/* webpackChunkName: "Error" */'../../pages/error'))



export const routes: RouteType[] = [
  {
    path: '/',
    exact: true,
    component: HomePage,
    loadable: true
  },
  {
    path: '/item',
    exact: true,
    component: ItemPage,
    loadable: true 
  },
  {
    path: '/item:id',
    exact: false,
    component: ItemPage, 
    loadable: true
  },
  {
    path: '/shop',
    exact: false,
    component: ShopPage,
    loadable: true,
  },
  {
    path: '/shop:category',
    exact: false,
    component: ShopPage,
    loadable: true
  },
  {
    path: '/shop/:category/:id',
    exact: false,
    component: ShopPage,
    loadable: true
  }
]

// <Route exact path= "/" render={()=> <HomePage/>}/>
// <Route exact path="/item" render={() => <ItemPage/>}/>
// <Route path="/item/:id" render={() => <ItemPage/>}/> 
// <Route path="/shop" render={() => <ShopPage/>}/>
// <Route path="/shop/:category" render={() => <ShopPage/>}/>
// <Route path="/shop/:category/:id" render={() => <ShopPage/>}/>
// <Route path="/test" component={ProgressBar}/> 
// <Route render={()=> <ErrorPage/>}/>

export const Router: FC = () => {
  return(
    <>
      {routes.map(({ path, exact, component: Component, ...rest}) => (
        <Route key={path} path={path} exact={exact} render={(props) => {
         return  Component ?
            <Component {...props} {...rest} />
              :
            null 
        }}/> 
      ))}
    </>
  )
}