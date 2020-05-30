import { Action, ActionCreator } from 'redux';
import { INITIAL_DATA_TYPE, INITIAL_ITEM } from 'src/models/data';

export interface CartDataAddAction extends Action{
  type: 'cart/ADD'
  payload: INITIAL_ITEM 
}
export interface CartDataAddDoneAction extends Action {
  type: 'cart/ADDSUCEESS'
}
export interface CartDataAddFailAction extends Action {
  type:  'cart/ADDERROR'
}

export const addCartData: ActionCreator<CartDataAddAction> = 
  (payload: INITIAL_ITEM) => ({
    type: 'cart/ADD' as const,
    payload 
  })
export const doneInitialData: ActionCreator<CartDataAddDoneAction> = (
) => ({
  type: 'cart/ADDSUCEESS', 
})
export const errorInitialData: ActionCreator<CartDataAddFailAction> = () => ({
  type: 'cart/ADDERROR'
});


export type CART_DICT = {
  key: number,
  
}
//state type 
type CART_DATA = {
  data: INITIAL_DATA_TYPE;
  dict: {
    
  },
  isLoading: boolean;
  isError: boolean; 
}

//initial state 
const initialState: INITIATION_DATA = {
  data: [] as INITIAL_DATA_TYPE, 
  isLoading: false,
  isError: false, 
}