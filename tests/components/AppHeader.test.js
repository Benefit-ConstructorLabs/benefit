import React from 'react';
import renderer from 'react-test-renderer';
import AppHeader from '../../src/components/AppHeader';

describe('AppHeader', () => {
  test('should render correctly', () => {
    const tree = renderer
      .create(<AppHeader />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
