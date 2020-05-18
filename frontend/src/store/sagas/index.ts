import { watchInitialFetch } from './initialSaga';
import { all, fork, call } from 'redux-saga/effects'; 

const RootSaga = function* watchAll(){
 yield all([
   fork(watchInitialFetch), 
 ]) 
}

export default RootSaga