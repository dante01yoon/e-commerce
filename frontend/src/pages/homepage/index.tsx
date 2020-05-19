<<<<<<< HEAD
import React, { FC, lazy,Suspense } from 'react';

const CardContainer = lazy(() => import('src/components/card')); 
export const HomePage:FC =() => {
  return(
    <>
      <Suspense fallback={<div>...loading</div>}>
        <CardContainer/>
      </Suspense>  
=======
import React, { FC, useEffect } from 'react';
import {useDispatch } from 'react-redux';
import { initialFetch} from '@apis/index'; 
import { load } from '@modules/initiation';
import { CardContainer } from 'src/components/card';
const HomePage:FC =() => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(load()); 
  // },[])
  const onClick = async () => {
    console.log('hello'); 
    // const [undefined, result ] = await initialFetch();

    dispatch(load());
    console.log('onClick');
  }
  return(
    <>
      <CardContainer/>
      <button onClick={onClick}>fetch Data</button>
>>>>>>> 3b9f89e1b144d476148dbe537910e7c4f339f5e9
    </> 
  )
}

export default HomePage; 