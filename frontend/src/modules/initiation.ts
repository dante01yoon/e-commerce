import { INITIAL_DATA_TYPE, INITIAL_ITEM } from 'src/models/data';

//actions
const LOADING = 'initiation/LOADING' as const;
const LOAD = 'initiation/LOAD' as const; 
const LOADSUCCESS = 'initiation/LOADSUCCESS' as const;
const LOADERROR = 'initiation/LOADERROR' as const;

//action creators 
export const load = () => ({ type: LOAD}); 
export const loading = () => ({type: LOADING});
export const done = ( payload: INITIAL_DATA_TYPE) => ({type: LOADSUCCESS, payload})
export const error = () => ({type: LOADERROR}); 

//state type 
type INITIATION_DATA = {
  data: INITIAL_DATA_TYPE;
  isLoading: boolean;
  isError: boolean; 
}

//initial state 
const initialState: INITIATION_DATA = {
  data: [] as INITIAL_DATA_TYPE, 
  isLoading: false,
  isError: false, 
}

//action type 
type initiationAction = 
  | ReturnType<typeof load>
  | ReturnType<typeof loading>
  | ReturnType<typeof done>
  | ReturnType<typeof error> 

function loadReducer(state: INITIATION_DATA = initialState, action: initiationAction){
  switch(action.type){
    case LOADING: 
      return { ...state, isLoading: true, isError: false }
    case LOAD:
      return { ...state, isLoading: false }
    case LOADSUCCESS: 
      return { ...state, data: action.payload, isLoading: false, isError: false }
    case LOADERROR:
      return { ...state, isLoading: false, isError: true };
    default: 
      return state; 
  }
}

export default loadReducer; 