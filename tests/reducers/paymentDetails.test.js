import paymentDetails from '../../src/reducers/paymentDetails';

describe('paymentDetails', () => {
  describe('Payment form input state', () => {
    it('executes SET_MOVIE_STRING action', () => {
      const initialState = {
        cardNumber: '',
      };
      const action = {
        type: 'SET_CARD_INPUT',
        cardNumber: '4242424242424242',
      };

      const expectedState = {
        cardNumber: '4242424242424242',
      };

      const outputState = paymentDetails(initialState, action);

      expect(outputState).toEqual(expectedState);
    });

    it('executes SET_EXP_DATE_INPUT action', () => {
      const initialState = {
        expDate: '',
      };
      const action = {
        type: 'SET_EXP_DATE_INPUT',
        expDate: '28 01 2019',
      };

      const expectedState = {
        expDate: '28 01 2019',
      };

      const outputState = paymentDetails(initialState, action);

      expect(outputState).toEqual(expectedState);
    });

    it('executes SET_CCV_INPUT action', () => {
      const initialState = {
        ccv: '',
      };
      const action = {
        type: 'SET_CCV_INPUT',
        ccv: '123',
      };

      const expectedState = {
        ccv: '123',
      };

      const outputState = paymentDetails(initialState, action);

      expect(outputState).toEqual(expectedState);
    });
  });

  describe('Payment details form Submit details reducer', () => {
    it('Submit payment details form and receive stripe token', () => {
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
});
