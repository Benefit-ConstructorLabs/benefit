import recipient from '../../src/reducers/recipient';

describe('donation reducer', () => {
  test('executes SET_RECIPIENT_FROM_DB action', () => {
    const initialState = {};
    const action = {
      type: 'SET_RECIPIENT_FROM_DB',
      bio: ['one', 'two', 'three'],
      firstName: 'Bill',
      id: 1,
      photo: 'photoURL',
      reason: 'reasonString',
    };
    const expectedState = {
      bio: ['one', 'two', 'three'],
      firstName: 'Bill',
      recipientID: 1,
      photo: 'photoURL',
      reason: 'reasonString',
    };
    const outputState = recipient(initialState, action);
    expect(outputState).toEqual(expectedState);
  });
});
