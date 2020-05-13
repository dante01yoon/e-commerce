import React, { FC, useEffect } from 'react';
import * as Styled from './style';
import { useForm, ErrorMessage} from 'react-hook-form';
import { ItemCountForm  } from 'src/models/item-count'; 
export const CountForm:FC<{
  partialData : Omit<ItemCountForm,'count'>
}> = ({
  partialData
}) => {
  
  const { register, handleSubmit, errors,getValues, setValue } = useForm<{count:number}>({
    defaultValues:{
      count: 1}
  });

  const onSubmit = async(data: {count: number}) => { 
    console.log('submitted');
    const formData: ItemCountForm = {
      id: partialData.id,
      name: partialData.name,
      count: data.count, 
      price: partialData.price * data.count
    }
    console.log(formData);
    
  }
  const count = getValues('count'); 
  const onIncrease = () => count < 999 && setValue('count',Number(count) + 1);
  const onDecrease = () => count > 1 && setValue('count',count - 1);
  return(
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Styled.Button onClick={onIncrease}>+</Styled.Button>
        <Styled.InputNumber type="number" name="count"  ref={register({
          min:{
            value:1,
            message: "you need at least 1"
          },
          max: {
            value: 999,
            message: "you can have at most 999"
          }
        })}/>
        <ErrorMessage 
          errors={errors} 
          name={"count"} 
          as={<Styled.ErrorText/>}
        />
        <Styled.Button onClick={onDecrease}>-</Styled.Button>
        <button type="submit">Add Cart</button>
      </form>
    </>
  )
}