import React, { FC, useEffect } from 'react';
import {useDispatch } from 'react-redux';
import { load } from '@modules/initiation';
import { CardContainer } from 'src/components/card';
const HomePage:FC =() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(load()); 
    return;
  },[])
  return(
    <CardContainer/> 
  )
}

export default HomePage; 