import { mapStateToProps } from '../../src/containers/NewDonationContainer';

describe('NewDonationContainer', () => {
  test('mapStateToProps extracts donation amount from state', () => {
    const mockState = {
      donation: {
        donationAmount: 5
      },
      view: {
        showPaymentDetails: false,
        donationComplete: false,
      },
      recipient: {
        firstName: 'Bill',
        photo: '',
        bio: [],
        reason: '',
      },
    };
    const expectedOutput = {
      donationAmount: 5,
      showPaymentDetails: false,
      donationComplete: false,
      firstName: 'Bill',
      photo: '',
      bio: [],
      reason: '',
    };
    const output = mapStateToProps(mockState);
    expect(output).toEqual(expectedOutput);
  });
});
