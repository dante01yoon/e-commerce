import { applyMiddleware, createStore, compose  } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from 'src/redux/sagas'; 
import { rootReducer } from './modules'; 


//middleware config 
const sagaMiddleware = createSagaMiddleware(); 
const middleWare = [sagaMiddleware]; 
const enhancer = process.env.NODE_ENV === 'production' 
                  ? compose(applyMiddleware(...middleWare))
                  : compose(composeWithDevTools(applyMiddleware(...middleWare))); 


const configureStore = (initialState: any) => {
  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  );
  sagaMiddleware.run(rootSaga); 

  return store; 
}

export default configureStore;