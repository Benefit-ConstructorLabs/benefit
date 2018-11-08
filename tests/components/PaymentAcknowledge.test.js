import React from 'react';
import renderer from 'react-test-renderer';
import PaymentAcknowlege from '../../src/components/PaymentAcknowledge';

describe('PaymentAcknowledge', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<PaymentAcknowlege />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
