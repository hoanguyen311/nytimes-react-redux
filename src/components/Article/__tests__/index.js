import React from 'react';
import { StaticRouter } from 'react-router';
import renderer from 'react-test-renderer';
import Article from '../index';

it('render with default props', () => {
  const component = renderer.create(
    <Article />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('render with full props', () => {
  const props = {
    id: '123',
    item: {
      snippet: '123',
      source: 'abc',
      pub_date: 'ccc',
      headline: 'ccc',
      image: 'ccc',
      id: 'ccc'
    }
  };
  const component = renderer.create(<StaticRouter context={{}}><Article {...props} /></StaticRouter>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
