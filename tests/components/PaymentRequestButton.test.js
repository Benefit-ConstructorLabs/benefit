import React from 'react';
import renderer from 'react-test-renderer';
import PaymentRequestButton from '../../src/components/PaymentRequestButton';

// It looks like you are trying to inject Stripe context outside of an Elements context.
describe(PaymentRequestButton, () => {
  test('matches the snapshot', () => {
    const tree = renderer.create(<PaymentRequestButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
