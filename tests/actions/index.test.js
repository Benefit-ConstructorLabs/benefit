import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { setDonationAmount, togglePaymentDetails, setRecipientFromDB, getRecipientFromDB, receiveStripeToken, setDonorID, setDonationID, createPaymentDetails, submitRecipientForm, setRecipientIdForQrCode, addRecipient, setNewDonorId, addDonor, setLoginDetails, setUserFromPassport, login, setHasCheckedUser, checkLogin, setLogout, logout, setDonationsFromDB } from '../../src/actions';

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

    test('getRecipientFromDB creates SET_RECIPIENT_FROM_DB action when fetch is complete', () => {
      fetch.mockResponse(
        JSON.stringify(recipient),
      );
      const expectedActions = [
        {
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
        },
      ];
      const store = mockStore({ firstName: '', bio: [], photo: '', donations: [] });

      return store.dispatch(getRecipientFromDB(1)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
    test('submitRecipientForm returns the expected action', () => {
      const expectedAction = { type: 'SUBMIT_RECIPIENT_FORM' };
      const outputAction = submitRecipientForm();
      expect(outputAction).toEqual(expectedAction);
    });
    test('setRecipientIdForQrCode returns the expected action', () => {
      const expectedAction = { type: 'SET_RECIPIENT_ID', id: 5 };
      const outputAction = setRecipientIdForQrCode(5);
      expect(outputAction).toEqual(expectedAction);
    });
    test('addRecipient calls fetch', () => {
      expect(output).toEqual(expectedOutput);
    });
    test('addRecipient dispatches setRecipientIdForQrCode on fetch success', () => {
      const output = addRecipient({ name: 'Bill' });
      expect(output).toEqual(expectedOutput);
    });
  });

  describe('Donor', () => {
    test('setDonorID returns expected action', () => {
      const expectedAction = {
        type: 'SET_DONOR_ID',
      };
      const outputAction = setDonorID();
      expect(outputAction).toEqual(expectedAction);
    });
    test('setNewDonorId returns the expected action', () => {
      const expectedAction = {
        type: 'SET_NEW_DONOR_ID',
        newDonorId: 6,
      };
      const outputAction = setNewDonorId(6);
      expect(outputAction).toEqual(expectedAction);
    });
    test('addDonor call fetch', () => {
      const output = addDonor({});
      expect(output).toEqual(expectedOutput);
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
    test('setDonationID returns expected action', () => {
      const expectedAction = {
        type: 'SET_DONATION_ID',
        donationID: 5,
      };
      const outputAction = setDonationID(5);
      expect(outputAction).toEqual(expectedAction);
    });
    test('setDonationsFromDB returns the expectedaction', () => {
      const expectedAction = {
        type: 'SET_RECIEVED_DONATIONS_FROM_DB',
        donations: [20, 30, 40],
      };
      const outputAction = setDonationsFromDB([20, 30, 40]);
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

    test('receiveStripeToken returns exepected action', () => {
      const action = receiveStripeToken('tok_1DTtwg2eZvKYlo2C0OVGbY7U');
      const expectedAction = {
        type: 'RECEIVE_STRIPE_TOKEN',
        stripeToken: 'tok_1DTtwg2eZvKYlo2C0OVGbY7U',
      };
    });
    test('createPaymentDetails calls fetch', () => {
      const outputAction = createPaymentDetails('stripeToken');
      expect(outputAction).toEqual(expectedAction);
    });
    expect(action).toEqual(expectedAction);
  });

});

describe('Login', () => {
  test('setLoginDetails returns the expected action', () => {
    const expectedAction = {
      type: 'SET_LOGIN_DETAILS',
      fieldName: 'name',
      fieldValue: 'Terri',
    };
    const outputAction = setLoginDetails('name', 'Terri');
    expect(outputAction).toEqual(expectedAction);
  });
  test('setUserFromPassport returns the expected action', () => {
    const expectedAction = {
      type: 'SET_USER_FROM_PASSPORT',
      isLoggedIn: true,
      userID: 3,
      userType: 'recipient',
      name: 'Nigel',
    };
    const outputAction = setUserFromPassport({ userId: 3, userType: 'recipient', name: 'Nigel' });
    expect(outputAction).toEqual(expectedAction);
  });
  test('login calls fetch', () => {
    const output = login();
    expect(output).toEqual(expectedOutput);
  });
  test('setHasCheckedUser returns expected action', () => {
    const expectedAction = {
      type: 'SET_HAS_CHECKED_USER',
      hasCheckedUser: true,
    };
    const outputAction = setHasCheckedUser();
    expect(outputAction).toEqual(expectedAction);
  });
  test('checkLogin calls fetch', () => {
    const output = checkLogin();
    expect(output).toEqual(expectedOutput);
  });
  test('setLogout returns the expected action', () => {
    const expectedAction = {
      type: 'SET_LOGOUT',
    };
    const outputAction = setLogout();
    expect(outputAction).toEqual(expectedAction);
  });
  test('logout calls fetch', () => {
    const output = logout();
    expect(output).toEqual(expectedOutput);
  });
});
