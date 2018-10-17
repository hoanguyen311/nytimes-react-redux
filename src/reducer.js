import { combineReducers } from 'redux';
import app from '@containers/App/reducer';
import newsList from '@containers/NewsList/reducer';

export default combineReducers({
  app,
  newsList
});
