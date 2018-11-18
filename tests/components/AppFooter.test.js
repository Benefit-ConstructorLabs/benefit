import React from 'react';
import renderer from 'react-test-renderer';
import AppFooter from '../../src/components/AppFooter';


describe('AppFooter', () => {
  test('should render correctly', () => {
    const tree = renderer
      .create(<AppFooter />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
