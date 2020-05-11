import React, { FC,lazy,Suspense } from 'react';

const LazyShopPage =  lazy(() => import('src/pages/shop'));
export const ShopPage: FC = () => {
  return( 
    <>
      Shop
    </>
  )
}
export const Shop:FC = () => {
  return(
    <Suspense fallback={<span>...loading</span>}>
      <LazyShopPage/>
    </Suspense>
  )
}
export default ShopPage;
