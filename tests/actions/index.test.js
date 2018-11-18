import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { setDonationAmount, togglePaymentDetails, setRecipientFromDB, getRecipientFromDB, receiveStripeToken, setDonorID, setDonationID, createPaymentDetails, submitRecipientForm, setRecipientIdForQrCode, addRecipient, setNewDonorId, addDonor, setLoginDetails, setUserFromPassport, login, setHasCheckedUser, checkLogin, setLogout, logout, setDonationsFromDB, setOrganisationDonations, getDonationsByOrganisationID, getDonationsByDonorID, getDonationsByRecipientID, getProfileDetailsByID, getDonorDetailsByID, getDonorFromDB, setDonorFromDB, setDonorDonationsFromDB } from '../../src/actions';

global.fetch = require('jest-fetch-mock');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  afterEach(() => {
    fetch.resetMocks();
  });
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
      const store = mockStore({});
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
    // TODO: addRecipient test
    test.skip('addRecipient calls fetch', () => {
      //
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
    // TODO: addDonor test
    test.skip('addDonor call fetch', () => {
      //
    });
    test.skip('getDonorDetailsByID call fetch', () => {
      const output = getDonorDetailsByID(3);
      expect(output).toEqual(expectedOutput);
    });
    test.skip('getDonorFromDB call fetch', () => {
      const output = getDonorFromDB(3);
      expect(output).toEqual(expectedOutput);
    });
    test('setDonorFromDB returns the expected action', () => {
      const donor = {
        id: 1,
        first_name: 'Larry',
        last_name: 'Manson',
        username: 'LALMAN',
        tel: '049582773',
        photo: 'photo/url',
      };
      const expectedAction = {
        type: 'SET_DONOR_FROM_DB',
        id: 1,
        firstName: 'Larry',
        lastName: 'Manson',
        username: 'LALMAN',
        tel: '049582773',
        photo: 'photo/url',
      };
      const outputAction = setDonorFromDB(donor);
      expect(outputAction).toEqual(expectedAction);
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
    // TODO: getDonationsByDonorID test
    test.skip('getDonationsByDonorID call fetch', () => {
      //
    });
    test('setDonorDonationsFromDB returns the expected action', () => {
      const expectedAction = {
        type: 'SET_DONOR_DONATIONS_FROM_DB',
        donations: [20, 30, 40],
      };
      const outputAction = setDonorDonationsFromDB([20, 30, 40]);
      expect(outputAction).toEqual(expectedAction);
    });
    // TODO: getDonationsByRecipientID test
    test.skip('getDonationsByRecipientID call fetch', () => {
      //
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

    test('receiveStripeToken returns expected action', () => {
      const action = receiveStripeToken('tok_1DTtwg2eZvKYlo2C0OVGbY7U');
      const expectedAction = {
        type: 'RECEIVE_STRIPE_TOKEN',
        stripeToken: 'tok_1DTtwg2eZvKYlo2C0OVGbY7U',
      };
      expect(action).toEqual(expectedAction);
    });
    // TODO: createPaymentDetails test
    test.skip('createPaymentDetails calls fetch', () => {
      //
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
    // TODO: login test
    test.skip('login calls fetch', () => {
      const store = mockStore({ login: { user: 'Terri', password: 'password1' } });
      fetch.mockResponse(
        JSON.stringify({}),
      );
      const expectedActions = {
        type: 'SUCCESS',
      };
      return store.dispatch(login()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
    test('setHasCheckedUser returns expected action', () => {
      const expectedAction = {
        type: 'SET_HAS_CHECKED_USER',
        hasCheckedUser: true,
      };
      const outputAction = setHasCheckedUser();
      expect(outputAction).toEqual(expectedAction);
    });
    // TODO: checkLogin test
    test.skip('checkLogin calls fetch', () => {
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
    // TODO: logout test
    test.skip('logout calls fetch', () => {
      const output = logout();
      expect(output).toEqual(expectedOutput);
    });
  });

  describe('Organisation', () => {
    test('setOrganisationDonations returns the expected action', () => {
      const expectedAction = {
        type: "SET_ORGANISATION_DONATIONS",
        donations: [20, 30, 40],
      };
      const outputAction = setOrganisationDonations([20, 30, 40]);
      expect(outputAction).toEqual(expectedAction);
    });
    // TODO: getDonationsByOrganisationID test
    test.skip('getDonationsByOrganisationID creates SET_ORGANISATION_DONATIONS action when fetch is complete', () => {
      const response = {
        donations: [10, 20, 30],
      };
      fetch.mockResponse(
        JSON.stringify(response),
      );
      const expectedActions = [
        {
          type: 'SET_ORGANISATION_DONATIONS',
          id: 1,
          donations: [10, 20, 30],
        },
      ];
      const store = mockStore({});
      return store.dispatch(getDonationsByOrganisationID(1)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
