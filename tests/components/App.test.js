import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../src/components/App';


describe('App', () => {
  test('should render correctly', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
