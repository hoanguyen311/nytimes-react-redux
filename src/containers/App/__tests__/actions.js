
import { FETCH_NEWS_DATA, FETCH_NEWS_DATA_SUCCESS, FETCH_NEWS_DATA_FAILURE, fetchNewsData, fetchNewsDataSuccess, fetchNewsDataFailure } from '../actions';

it('fetchNewsData', () => {
  expect(fetchNewsData()).toEqual({
    type: FETCH_NEWS_DATA
  });
});

it('fetchNewsDataSuccess', () => {
  expect(fetchNewsDataSuccess({ data: true })).toEqual({
    type: FETCH_NEWS_DATA_SUCCESS,
    payload: {
      data: true
    }
  });
});

it('fetchNewsDataFailure', () => {
  expect(fetchNewsDataFailure({ message: 'abc' })).toEqual({
    type: FETCH_NEWS_DATA_FAILURE,
    error: { message: 'abc' }
  });
});
