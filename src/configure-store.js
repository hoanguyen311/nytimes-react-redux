import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import sagas from './sagas';

export default function() {
  const sagaMiddleware = createSagaMiddleware();
  let composeEnhancers = compose;

  if (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  }

  const store = createStore(
    reducer,
    composeEnhancers(
      applyMiddleware(sagaMiddleware)
    )
  );
  sagaMiddleware.run(sagas);

  return store;
};
