import { mapStateToProps } from '../../src/containers/DonationFormContainer';

describe('Donation Form Container', () => {
  test.skip('mapStateToProps extracts donationAmount from state', () => {
    const mockState = {
      donation: {
        donationAmount: 5,
      },
      recipient: {
        firstName: 'Bill',
        photo: '',
      },
    };
    const expectedOutput = {
      donationAmount: 5,
      firstName: 'Bill',
      photo: '',
    };
    const output = mapStateToProps(mockState);
    expect(output).toEqual(expectedOutput);
  });
});
