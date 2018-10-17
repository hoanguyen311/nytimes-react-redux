import { combineReducers } from 'redux';
import { format } from 'date-fns';
import { FETCH_NEWS_DATA_SUCCESS } from '@containers/App/actions';

export const initialState = {
  allIds: [],
  byId: {}
};

export function normalizeItem(item) {
  let image = null;

  if (item.multimedia.length && item.multimedia[0].url) {
    image = `https://www.nytimes.com/${item.multimedia[0].url}`;
  }

  return {
    ...item,
    id: item._id,
    headline: item.headline.main,
    image,
    formattedDate: item.pub_date ? format(item.pub_date, 'MM/DD/YYYY') : null
  };
}

export function byId(state = initialState.byId, { type, payload }) {
  switch(type) {
    case FETCH_NEWS_DATA_SUCCESS:
      return payload.docs.reduce((results, doc) => {
        return {
          ...results,
          [doc._id]: normalizeItem(doc)
        };
      }, {});

    default:
      return state;
  }
}

export function allIds(state = initialState.allIds, { type, payload }) {
  switch(type) {
    case FETCH_NEWS_DATA_SUCCESS:
      return state.concat(payload.docs.map(doc => doc._id));

    default:
      return state;
  }
}

export function getAll({ allIds, byId }) {
  return allIds.map((id) => byId[id]);
}

export default combineReducers({
  byId,
  allIds
});
