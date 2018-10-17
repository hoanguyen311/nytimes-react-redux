import { FETCH_NEWS_DATA, FETCH_NEWS_DATA_SUCCESS, FETCH_NEWS_DATA_FAILURE } from './actions';

export default function(state = initialState, { type, payload, error }) {
  switch(type) {
    case FETCH_NEWS_DATA:
      return {
        ...state,
        loading: true
      };

    case FETCH_NEWS_DATA_SUCCESS:
      return {
        ...state,
        loading: false
      };

    case FETCH_NEWS_DATA_FAILURE:
      return {
        ...state,
        error,
        loading: false
      };

    default:
      return state;
  }
}

export const initialState = {
  loading: true,
  error: null
};
