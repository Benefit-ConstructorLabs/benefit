import donation from '../../src/reducers/donation';

describe('donation reducer', () => {
  test('executes SET_DONATION_AMOUNT action', () => {
    const initialState = { donationAmount: 1 };
    const action = {
      type: 'SET_DONATION_AMOUNT',
      donationAmount: 5,
    };
    const expectedState = { donationAmount: 5 };
    const outputState = donation(initialState, action);
    expect(outputState).toEqual(expectedState);
  });
});
