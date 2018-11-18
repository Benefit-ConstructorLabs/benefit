import { mapStateToProps } from '../../src/containers/PaymentDetailsFormContainer';

describe('Payment Details Form Container', () => {
  test('mapStateToProps extracts name, donation amount, isLoggedIn and user type from state', () => {
    const mockState = {
      recipient: {
        firstName: 'Bob',
      },
      donation: {
        donationAmount: 30,
      },
      login: {
        isLoggedIn: true,
        userType: 'recipient',
      },
    };
    const expectedOutput = {
      firstName: 'Bob',
      donationAmount: 30,
      isLoggedIn: true,
      userType: 'recipient',
    };
    const output = mapStateToProps(mockState);
    expect(output).toEqual(expectedOutput);
  });
});
