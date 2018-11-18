import { receiveStripeToken } from '../../src/actions';

describe('actions', () => {
  describe('Payment details form Submit details', () => {
    test.skip('Submit payment details form and receive stripe token', () => {
      const action = receiveStripeToken('tok_1DTtwg2eZvKYlo2C0OVGbY7U');

      const expectedAction = {
        type: 'RECEIVE_STRIPE_TOKEN',
        stripeToken: 'tok_1DTtwg2eZvKYlo2C0OVGbY7U',
      };

      expect(action).toEqual(expectedAction);
    });
  });
});
