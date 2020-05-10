import React, {FC, ReactNode, Suspense, ReactChildren } from 'react';

const LazyLoader:FC<{
  Component: FC
}> = ({
  Component
}) => {
  console.log(Component);
  return(
    <Suspense fallback={<p>...loading</p>}>
      <Component/>
    </Suspense>
  )
} 

export default LazyLoader;