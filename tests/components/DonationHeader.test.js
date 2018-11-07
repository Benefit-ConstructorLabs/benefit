import React from 'react';
import renderer from 'react-test-renderer';
import DonationHeader from '../../src/components/DonationHeader';

describe('DonationHeader', () => {
  test('should render correctly', () => {
    const tree = renderer
      .create(<DonationHeader />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
