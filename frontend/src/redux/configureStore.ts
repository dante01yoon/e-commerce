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
  if(module.hot){
    module.hot.accept('./modules',() => {
      const nextRootReducer = rootReducer;
      store.replaceReducer(nextRootReducer); 
    })
  }
  return store; 
}

export default configureStore;