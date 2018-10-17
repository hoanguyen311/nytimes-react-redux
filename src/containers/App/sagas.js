
import { takeLatest, call, put } from 'redux-saga/effects';
import request from '@/utils';
import { FETCH_NEWS_DATA, fetchNewsDataSuccess, fetchNewsDataFailure } from './actions';

export const API_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=5763846de30d489aa867f0711e2b031c&q=singapore&page=0';
export function* fetchNewsData() {
  try {
    const { status, response } = yield call(request, API_URL);

    if (status === 'OK') {
      yield put(fetchNewsDataSuccess(response));
      return;
    }

    yield put(fetchNewsDataFailure(response));
  } catch(error) {
    yield put(fetchNewsDataFailure(error));
  }
}

export default function* () {
  yield takeLatest(FETCH_NEWS_DATA, fetchNewsData);
}
