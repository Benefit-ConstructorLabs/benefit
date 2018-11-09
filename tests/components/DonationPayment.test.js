import React from 'react';
import renderer from 'react-test-renderer';
import DonationPayment from '../../src/components/DonationPayment';

describe('DonationPayment', () => {
  test.skip('should render correctly', () => {
    const tree = renderer
      .create(<DonationPayment />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
