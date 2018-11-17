import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { setDonationAmount, togglePaymentDetails, setRecipientFromDB, getRecipientFromDB, receiveStripeToken } from '../../src/actions';

global.fetch = require('jest-fetch-mock');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {

  describe('Recipient', () => {

    const recipient = {
      id: 1,
      first_name: 'John',
      last_name: 'Smith',
      tel: '01234567890',
      username: 'jsmith',
      photo: 'https://s3.eu-west-2.amazonaws.com/recipient-photo/man1.jpg',
      bio: [
        'I play the trumpet',
        'I like black coffee',
        'I am an Arsenal fan',
      ],
    };

    afterEach(() => {
      fetch.resetMocks();
    });

    test('setRecipientFromDB returns the expected action', () => {
      const expectedAction = {
        type: 'SET_RECIPIENT_FROM_DB',
        id: 1,
        firstName: 'John',
        lastName: 'Smith',
        tel: '01234567890',
        username: 'jsmith',
        photo: 'https://s3.eu-west-2.amazonaws.com/recipient-photo/man1.jpg',
        bio: [
          'I play the trumpet',
          'I like black coffee',
          'I am an Arsenal fan',
        ],
      };
      const outputAction = setRecipientFromDB(recipient);
      expect(outputAction).toEqual(expectedAction);
    });

    test('getRecipientFromDB creates SET_RECIPIENT_FROM_DB when fetch is complete', () => {
      fetch.mockResponse(
        JSON.stringify(recipient),
      );
      const expectedActions = [
        {
          type: 'SET_RECIPIENT_FROM_DB', id: 1,
          firstName: 'John',
          lastName: 'Smith',
          tel: '01234567890',
          username: 'jsmith',
          photo: 'https://s3.eu-west-2.amazonaws.com/recipient-photo/man1.jpg',
          bio: [
            'I play the trumpet',
            'I like black coffee',
            'I am an Arsenal fan',
          ],
        },
      ];
      const store = mockStore({ firstName: '', bio: [], photo: '', donations: [] });

      return store.dispatch(getRecipientFromDB(1)).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('Donation', () => {
    test('setDonationAmount returns expected action', () => {
      const expectedAction = {
        type: 'SET_DONATION_AMOUNT',
        donationAmount: 30,
      };
      const outputAction = setDonationAmount('£30');
      expect(outputAction).toEqual(expectedAction);
    });
  });


  describe('Payment', () => {

    test('togglePaymentDetails returns the expected action', () => {
      const expectedAction = {
        type: 'TOGGLE_PAYMENT_DETAILS',
      };
      const outputAction = togglePaymentDetails();
      expect(outputAction).toEqual(expectedAction);
    });

    test('Submit payment details form and receive stripe token', () => {
      const action = receiveStripeToken('tok_1DTtwg2eZvKYlo2C0OVGbY7U');
      const expectedAction = {
        type: 'RECEIVE_STRIPE_TOKEN',
        stripeToken: 'tok_1DTtwg2eZvKYlo2C0OVGbY7U',
      };

      expect(action).toEqual(expectedAction);
    });
  });
});
