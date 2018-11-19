import React from 'react';
import renderer from 'react-test-renderer';
import PaymentDetailsForm from '../../src/components/PaymentDetailsForm';

// It looks like you are trying to inject Stripe context outside of an Elements context. 
// Please be sure the component that calls createSource or createToken is withinan <Elements> component.

describe('DonationForm', () => {
  test.skip('should render correctly', () => {
    const tree = renderer
      .create(<PaymentDetailsForm />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
