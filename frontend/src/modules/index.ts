import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from '@store/sagas'; 
import initiation from './initiation';

const sagaMiddleware = createSagaMiddleware(); 
const middleWare = [sagaMiddleware]; 
const enhancer = process.env.NODE_ENV === 'production' 
                  ? compose(applyMiddleware(...middleWare))
                  : compose(composeWithDevTools(applyMiddleware(...middleWare))); 
                  
const rootReducer = combineReducers({
  initial: initiation 
  
})

export const store = createStore(
  rootReducer,
  enhancer
)

sagaMiddleware.run(rootSaga); 
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>; 
