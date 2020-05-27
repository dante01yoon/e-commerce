import React, { FC, useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { load } from 'src/redux/modules/initiation';
import { CardContainer } from 'src/components/card';
import { RootState } from 'src/redux/modules';
const HomePage:FC =() => {
  const dispatch = useDispatch();
  const { data, isLoading} = useSelector((state: RootState) => state.initial);

  useEffect(() => {
    dispatch(load()); 
  },[])
    return(
    <>
      <CardContainer data={data} isLoading={isLoading}/>
    </> 
  )
}

export default HomePage; 