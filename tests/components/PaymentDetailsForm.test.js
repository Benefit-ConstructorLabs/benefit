import React from 'react';
import renderer from 'react-test-renderer';
import PaymentDetailsForm from '../../src/components/PaymentDetailsForm';

describe('DonationForm', () => {
  test.skip('should render correctly', () => {
    const tree = renderer
      .create(<PaymentDetailsForm />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
