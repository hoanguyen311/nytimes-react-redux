import { fork, all } from 'redux-saga/effects';
import appSaga from '@containers/App/sagas';

export default function* rootSaga() {
  yield all([
    fork(appSaga)
  ]);
}
