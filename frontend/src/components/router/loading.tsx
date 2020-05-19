import React, {FC, ReactNode, Suspense, ReactChildren } from 'react';
import { LoadableComponent } from '@loadable/component';

const LazyLoader:FC<{
  Component: LoadableComponent<{}>
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
