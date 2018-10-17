import { fetchNewsData, fetchNewsDataSuccess, fetchNewsDataFailure } from '../actions';
import reducer, { initialState } from '../reducer';

it('initialState', () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});


it('fetchNewsData', () => {
  const action = fetchNewsData();

  expect(reducer(undefined, action))
    .toEqual({
      ...initialState,
      loading: true
    });
});

it('fetchNewsDataSuccess', () => {
  const action = fetchNewsDataSuccess();

  expect(reducer(undefined, action))
    .toEqual({
      ...initialState,
      loading: false
    });
});

it('fetchNewsDataFailure', () => {
  const error = new Error('mock error');
  const action = fetchNewsDataFailure(error);

  expect(reducer(undefined, action))
    .toEqual({
      ...initialState,
      error,
      loading: false
    });
});
