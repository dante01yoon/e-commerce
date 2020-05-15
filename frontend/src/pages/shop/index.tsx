import React, { FC,lazy,Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { ShopComponent } from 'src/components/shop';
const ShopPage: FC = () => {
  return( 
    <>
      <Helmet>
        <title>
         S4 - shop
        </title>
      </Helmet>
      <ShopComponent/>
    </>
  )
}

export default ShopPage;
