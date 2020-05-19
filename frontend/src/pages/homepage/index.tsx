import React, { FC, useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { load } from '@modules/initiation';
import { CardContainer } from 'src/components/card';
import { RootState } from 'src/modules';
const HomePage:FC =() => {
  const dispatch = useDispatch();
  const initialData =    useSelector((state: RootState) => state.initial.data);

  useEffect(() => {
    dispatch(load()); 
  },[])
    return(
    <>
      <CardContainer data={initialData}/>
    </> 
  )
}

export default HomePage; 