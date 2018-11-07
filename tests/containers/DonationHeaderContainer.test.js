import { mapStateToProps } from '../../src/containers/DonationHeaderContainer';

describe('DonationHeaderContainer', () => {
  test('mapStateToProps extracts rcipient firstName from state', () => {
    const mockState = { recipient: { firstName: 'Bill' } };
    const expectedOutput = {
      firstName: 'Bill',
    };
    const output = mapStateToProps(mockState);
    expect(output).toEqual(expectedOutput);
  });
});
