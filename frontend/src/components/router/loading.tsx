import React, {FC, ReactNode,Suspense } from 'react';

const LazyLoader:FC<{
  component: ReactNode
}> = ({
  component
}) => {
  return(
    <Suspense fallback={<p>...loading</p>}>
      {component}
    </Suspense>
  )
} 

export default LazyLoader;