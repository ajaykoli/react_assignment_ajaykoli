import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  );
const store = createStore(rootReducer, middleware);

sagaMiddleware.run(rootSaga);

export default store;