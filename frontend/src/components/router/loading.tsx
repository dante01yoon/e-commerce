<<<<<<< HEAD
=======
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
>>>>>>> 3b9f89e1b144d476148dbe537910e7c4f339f5e9
