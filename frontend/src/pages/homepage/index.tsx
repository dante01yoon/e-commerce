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
    </> 
  )
}

export default HomePage; 