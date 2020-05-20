import {takeLatest, takeEvery, call, put, delay } from 'redux-saga/effects'; 
import { initialFetch } from '@apis/index'; 
import {load,done, error} from '@modules/initiation'; 
import { buildInitialData } from 'src/libs/dataProccesing';


function* fetchInitialData(){
  try{
    yield console.log('data fetched');
    const data = yield call(initialFetch);
    yield console.log('data responsed'); 
    yield delay(2000);
    yield put(done(buildInitialData(data[1]))); 
     
  } catch(e){
    console.error(e);
    yield put(error())
  }
}


export function* watchInitialFetch(){
  yield takeLatest("initiation/LOAD", fetchInitialData)
}
