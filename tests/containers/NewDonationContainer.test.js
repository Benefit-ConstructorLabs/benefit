import { mapStateToProps } from '../../src/containers/NewDonationContainer';

describe('NewDonationContainer', () => {
  test('mapStateToProps extracts donation amount from state', () => {
    const mockState = { donation: { donationAmount: 5 } };
    const expectedOutput = {
      donationAmount: 5,
    };
    const output = mapStateToProps(mockState);
    expect(output).toEqual(expectedOutput);
  });
});