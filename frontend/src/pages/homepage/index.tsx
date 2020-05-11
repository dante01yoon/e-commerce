import React, { FC, lazy,Suspense } from 'react';

const CardContainer = lazy(() => import('src/components/card')); 
export const HomePage:FC =() => {
  return(
    <>
      <Suspense fallback={<div>...loading</div>}>
        <CardContainer/>
      </Suspense>  
    </> 
  )
}

export default HomePage; 