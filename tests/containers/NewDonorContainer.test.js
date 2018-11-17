import { mapStateToProps } from '../../src/containers/NewDonorContainer';

describe('New Donor Container', () => {
  test('mapStateToProps extracts newDonorId from state', () => {
    const mockState = {
      donor: {
        newDonorId: 4,
      },
    };
    const expectedOutput = {
      newDonorId: 4,
    };
    const output = mapStateToProps(mockState);
    expect(output).toEqual(expectedOutput);
  });
});
