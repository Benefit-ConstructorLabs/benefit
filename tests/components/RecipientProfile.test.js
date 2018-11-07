import React from 'react';
import renderer from 'react-test-renderer';
import RecipientProfile from '../../src/components/RecipientProfile';

describe('RecipientProfile', () => {
  test('should render correctly', () => {
    const tree = renderer
      .create(<RecipientProfile />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
