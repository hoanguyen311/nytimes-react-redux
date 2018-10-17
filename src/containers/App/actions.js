export const FETCH_NEWS_DATA = 'FETCH_NEWS_DATA';
export const FETCH_NEWS_DATA_SUCCESS = 'FETCH_NEWS_DATA_SUCCESS';
export const FETCH_NEWS_DATA_FAILURE = 'FETCH_NEWS_DATA_FAILURE';


export function fetchNewsData() {
  return {
    type: FETCH_NEWS_DATA,
  };
}

export function fetchNewsDataSuccess(payload) {
  return {
    type: FETCH_NEWS_DATA_SUCCESS,
    payload
  };
}

export function fetchNewsDataFailure(error) {
  return {
    type: FETCH_NEWS_DATA_FAILURE,
    error
  };
}
