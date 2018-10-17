import { call, put } from 'redux-saga/effects';
import { fetchNewsDataSuccess, fetchNewsDataFailure } from '../actions';
import request from '../../../utils';
import { fetchNewsData, API_URL } from '../sagas';

it('call API success', () => {
  const gen = fetchNewsData();
  expect(gen.next().value).toEqual(call(request, API_URL));
  expect(gen.next({ status: 'OK', response: 'aa' }).value).toEqual(put(fetchNewsDataSuccess('aa')));
});

it('call API failure', () => {
  const gen = fetchNewsData();
  expect(gen.next().value).toEqual(call(request, API_URL));
  expect(gen.next({ status: 'ERROR', response: 'error' }).value).toEqual(put(fetchNewsDataFailure('error')));
});
