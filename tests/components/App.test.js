import React from 'react'
import App from '../../src/components/App';
import renderer from 'react-test-renderer';

describe('App', () => {
  test('should render correctly', () => {
    const tree = renderer
      .create(<App />)
      .toJSON()
    expect(tree).toMatchSnapshot();
  });
})