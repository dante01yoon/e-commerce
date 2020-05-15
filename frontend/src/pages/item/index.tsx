import React , { FC, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet'; 
import { ItemComponent } from 'src/components/item';
const LazyItemPage =  lazy(() => import('src/pages/item'));
const ItemPage:FC = ({}) => {
  return(
    <>
     <Helmet>
       <title>
        S4 - item
       </title>
      </Helmet>
     <ItemComponent/> 
    </>   
  )
}

export const Item:FC = () => {
  return(
    <LazyItemPage/>
  )
}
export default ItemPage;