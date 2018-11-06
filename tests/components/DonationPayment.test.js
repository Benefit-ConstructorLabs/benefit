import React from 'react'
import DonationPayment from '../../src/components/DonationPayment';
import renderer from 'react-test-renderer';

describe('DonationPayment', () => {
  test('should render correctly', () => {
    const tree = renderer
      .create(<DonationPayment />)
      .toJSON()
    expect(tree).toMatchSnapshot();
  });
})