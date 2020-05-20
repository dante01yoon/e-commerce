import { watchInitialFetch } from './initialSaga';
import { all, fork } from 'redux-saga/effects'; 

const RootSaga = function* watchAll(){
 yield all([
   fork(watchInitialFetch), 
 ]) 
}

export default RootSaga