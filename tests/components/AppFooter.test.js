import React from 'react'
import AppFooter from '../../src/components/AppFooter';
import renderer from 'react-test-renderer';

describe('AppFooter', () => {
  test('should render correctly', () => {
    const tree = renderer
      .create(<AppFooter />)
      .toJSON()
    expect(tree).toMatchSnapshot();
  });
})