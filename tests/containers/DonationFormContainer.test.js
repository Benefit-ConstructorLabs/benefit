import { mapStateToProps } from '../../src/containers/DonationFormContainer';

describe('Donation Form Container', () => {
  test('mapStateToProps extracts donationAmount from state', () => {
    const mockState = {
      donation: {
        donationAmount: 5,
      },
      recipient: {
        firstName: 'Bill',
        photo: '',
        reason: '',
      },
    };
    const expectedOutput = {
      donationAmount: 5,
      firstName: 'Bill',
      photo: '',
      reason: '',
    };
    const output = mapStateToProps(mockState);
    expect(output).toEqual(expectedOutput);
  });
});
