import React from 'react';
import { shallow } from 'enzyme';
import PaymentRequestButton from '../../src/components/PaymentRequestButton';

// It looks like you are trying to inject Stripe context outside of an Elements context.
describe(PaymentRequestButton, () => {
  test.skip('should render the wrapped component', () => {
    const wrapper = shallow(<PaymentRequestButton />);
    expect(wrapper.html).not.toBe(null);
  });
});
