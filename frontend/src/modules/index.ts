import { combineReducers } from 'redux';

import initiation from './initiation';

const rootReducer = combineReducers({
  initial: initiation 
  
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>; 
