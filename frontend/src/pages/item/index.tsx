import React , { FC, lazy, Suspense } from 'react';
import { ItemComponent } from 'src/components/item';
const LazyItemPage =  lazy(() => import('src/pages/item'));
export const ItemPage:FC = ({}) => {
  return(
    <>
     <ItemComponent/> 
    </>   
  )
}

export const Item:FC = () => {
  return(
    <Suspense fallback={<span>...loading</span>}>
      <LazyItemPage/>
    </Suspense>
  )
}
export default ItemPage;