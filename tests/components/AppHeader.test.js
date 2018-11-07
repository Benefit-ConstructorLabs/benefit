import React from 'react'
import AppHeader from '../../src/components/AppHeader';
import renderer from 'react-test-renderer';

describe('AppHeader', () => {
  test('should render correctly', () => {
    const tree = renderer
      .create(<AppHeader />)
      .toJSON()
    expect(tree).toMatchSnapshot();
  });
})