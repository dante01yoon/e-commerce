import React, { FC,lazy,Suspense } from 'react';
import { ShopComponent } from 'src/components/shop';
const LazyShopPage =  lazy(() => import('src/pages/shop'));
export const ShopPage: FC = () => {
  return( 
    <>
      <ShopComponent/>
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
