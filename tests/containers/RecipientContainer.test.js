import { mapStateToProps } from '../../src/containers/RecipientContainer';

describe('Recipient Container', () => {
  test.skip('mapStateToProps extracts donations and profile from state', () => {
    const mockState = {
      recipient: {
        photo: 'photo/url',
        firstName: 'Bill',
        lastName: 'Williams',
        username: 'BillWill23',
        tel: '07958429387',
        bio: ['one', 'two', 'three'],
        donations: [30, 40, 2, 5],
      },
    };
    const expectedOutput = {
      donations: [30, 40, 2, 5],
      profile: {
        photo: 'photo/url',
        firstName: 'Bill',
        lastName: 'Williams',
        username: 'BillWill23',
        tel: '07958429387',
        bio: ['one', 'two', 'three'],
      },
    };
    const output = mapStateToProps(mockState);
    expect(output).toEqual(expectedOutput);
  });
});
