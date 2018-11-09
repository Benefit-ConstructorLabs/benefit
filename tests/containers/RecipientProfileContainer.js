import { mapStateToProps } from '../../src/containers/RecipientProfileContainer';

describe('Recipient Profile Container', () => {
  test('mapStateToProps extracts first name and bio from state', () => {
    const mockState = {
      recipient: {
        firstName: 'Bill',
        bio: ['one', 'two', 'three'],
      },
    };
    const expectedOutput = {
      firstName: 'Bill',
      bio: ['one', 'two', 'three'],
    };
    const output = mapStateToProps(mockState);
    expect(output).toEqual(expectedOutput);
  });
});
