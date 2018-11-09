import { setCardInput, setExpDateInput, setCcvInput, receiveStripeToken } from '../../src/actions';

describe('actions', () => {
  describe('Payment details form inputs', () => {
    it('setCardInput returns expected action', () => {
      const action = setCardInput('4242424242424242');

      const expectedAction = {
        type: 'SET_CARD_INPUT',
        cardNumber: '4242424242424242',
      };

      expect(action).toEqual(expectedAction);
    });

    it('setExpDateInput returns expected action', () => {
      const action = setExpDateInput('28 01 2019');

      const expectedAction = {
        type: 'SET_EXP_DATE_INPUT',
        expDate: '28 01 2019',
      };

      expect(action).toEqual(expectedAction);
    });

    it('setCcvInput returns expected action', () => {
      const action = setCcvInput('123');

      const expectedAction = {
        type: 'SET_CCV_INPUT',
        ccv: '123',
      };

      expect(action).toEqual(expectedAction);
    });
  });

  describe('Payment details form Submit details', () => {
    it('Submit payment details form and receive stripe token', () => {
      const action = receiveStripeToken('tok_1DTtwg2eZvKYlo2C0OVGbY7U');

      const expectedAction = {
        type: 'RECEIVE_STRIPE_TOKEN',
        stripeToken: 'tok_1DTtwg2eZvKYlo2C0OVGbY7U',
      };

      expect(action).toEqual(expectedAction);
    });
  });
});
