import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import reducer from '@/reducer';
import { fetchNewsData, fetchNewsDataSuccess, fetchNewsDataFailure } from '@/containers/App/actions';
import App from '../index';

let createStore = null;

beforeEach(() => {
  createStore = configureStore();
});

it('fetchNewsData', () => {
  const store = createStore(reducer(undefined, fetchNewsData()));

  const component = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('fetchNewsDataSuccess', () => {
  const action = fetchNewsDataSuccess({
    docs: []
  });
  const store = createStore(reducer(undefined, action));

  const component = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('fetchNewsDataFailure', () => {
  const action = fetchNewsDataFailure({
    message: ''
  });
  const store = createStore(reducer(undefined, action));

  const component = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

