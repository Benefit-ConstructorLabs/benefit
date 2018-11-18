import paymentDetails from '../../src/reducers/paymentDetails';

describe('paymentDetails reducer', () => {

  test('executes RECEIVE_STRIPE_TOKEN action', () => {
    const initialState = {
      stripeToken: '',
    };
    const action = {
      type: 'RECEIVE_STRIPE_TOKEN',
      stripeToken: 'tok_1DTtwg2eZvKYlo2C0OVGbY7U',
    };

    const expectedState = {
      stripeToken: 'tok_1DTtwg2eZvKYlo2C0OVGbY7U',
    };

    const outputState = paymentDetails(initialState, action);

    expect(outputState).toEqual(expectedState);
  });
});
