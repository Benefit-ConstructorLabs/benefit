import view from '../../src/reducers/view';

describe('view reducer', () => {
  test.skip('executes TOGGLE_PAYMENT_DETAILS action', () => {
    const initialState = { showPaymentDetails: false, donationComplete: false };
    const action = {
      type: 'TOGGLE_PAYMENT_DETAILS',
      showPaymentDetails: !initialState.showPaymentDetails,
    };
    const expectedState = { showPaymentDetails: true, donationComplete: false };
    const outputState = view(initialState, action);
    expect(outputState).toEqual(expectedState);
  });
});
