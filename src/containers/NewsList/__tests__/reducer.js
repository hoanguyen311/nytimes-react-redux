import { fetchNewsDataSuccess } from '../../App/actions';
import reducer, { initialState, normalizeItem } from '../reducer';

it('initialState', () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

it('byId', () => {
  const payload = {
    docs: [
      {
        _id: '1',
        headline: {
          main: 'aaaa'
        },
        pub_date: '2018-03-28T09:45:05+0000',
        multimedia: [
          { url: 'image-url' }
        ]
      }
    ]
  };

  const { byId } = reducer(undefined, fetchNewsDataSuccess(payload));

  expect(byId).toEqual(payload.docs.reduce((re, doc) => {
    return {
      ...re,
      [doc._id]: normalizeItem(doc)
    }
  }, {}));
});

it('allIds', () => {
  const payload = {
    docs: [
      {
        _id: '1',
        headline: {
          main: 'aaaa'
        },
        pub_date: '2018-03-28T09:45:05+0000',
        multimedia: [
          { url: 'image-url' }
        ]
      }
    ]
  };

  const { allIds } = reducer(undefined, fetchNewsDataSuccess(payload));
  expect(allIds).toEqual(payload.docs.map((doc) => doc._id));
});
