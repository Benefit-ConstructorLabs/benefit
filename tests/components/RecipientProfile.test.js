import React from 'react'
import RecipientProfile from '../../src/components/RecipientProfile';
import renderer from 'react-test-renderer';

describe('App', () => {
  test('should render correctly', () => {
    const tree = renderer
      .create(<RecipientProfile />)
      .toJSON()
    expect(tree).toMatchSnapshot();
  });
})