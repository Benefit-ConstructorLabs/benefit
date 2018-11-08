import { mapStateToProps } from '../../src/containers/DonationFormContainer';

describe('Donation Form', () => {
  test('mapStateToProps extracts donationAmount from state', () => {
    const mockState = { donation: { donationAmount: 5 } };
    const expectedOutput = { donationAmount: 5 };
    const output = mapStateToProps(mockState);
    expect(output).toEqual(expectedOutput);
  });
});
