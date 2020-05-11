import React, {FC, ReactNode, Suspense, ReactChildren } from 'react';

const LazyLoader:FC<{
  Component: FC
}> = ({
  Component
}) => {
  return(
    <Suspense fallback={<p>...loading</p>}>
      <Component/>
    </Suspense>
  )
} 

export default LazyLoader;