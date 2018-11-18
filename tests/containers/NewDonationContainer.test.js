import { mapStateToProps } from '../../src/containers/NewDonationContainer';

describe('NewDonationContainer', () => {
  test.skip('mapStateToProps extracts donation amount from state', () => {
    const mockState = { donation: { donationAmount: 5 }, view: { showPaymentDetails: false }, recipient: { firstName: 'Bill', photo: '', bio: [] } };
    const expectedOutput = {
      donationAmount: 5,
      showPaymentDetails: false,
      firstName: 'Bill',
      photo: '',
      bio: [],
    };
    const output = mapStateToProps(mockState);
    expect(output).toEqual(expectedOutput);
  });
});
