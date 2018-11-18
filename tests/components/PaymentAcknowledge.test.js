import React from 'react';
import { mountWrap, shallowWrap } from './contextWrap';
import { PaymentAcknowledge } from '../../src/components/PaymentAcknowledge';

describe('Component', () => {
  let props;
  let component;
  const wrappedShallow = () => shallowWrap(<PaymentAcknowledge {...props} />);

  // const wrappedMount = () => mountWrap(<PaymentAcknowledge {...props} />);

  beforeEach(() => {
    props = {
      query: {
        refetch: jest.fn(),
      },
    };
    if (component) component.unmount();
  });

  describe('PaymentAcknowledge', () => {
    test.skip('should render correctly', () => {
      const wrapper = wrappedShallow();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
