// Create Redux Store
import { createStore, applyMiddleware, compose } from "redux";
import reducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import { watchAgeUP } from '../sagas/index'

const sageMiddleware = createSagaMiddleware()

export default createStore(
  reducer,
  compose(
    applyMiddleware(sageMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// First you must mount the middleware with applyMiddleware then run it here
sageMiddleware.run(watchAgeUP)
