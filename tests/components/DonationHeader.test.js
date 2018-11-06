import React from 'react'
import DonationHeader from '../../src/components/DonationHeader';
import renderer from 'react-test-renderer';

describe('DonationHeader', () => {
  test('should render correctly', () => {
    const tree = renderer
      .create(<DonationHeader />)
      .toJSON()
    expect(tree).toMatchSnapshot();
  });
})