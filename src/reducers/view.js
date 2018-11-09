const view = (state = { showPaymentDetails: false, donationComplete: false }, action) => {
  switch (action.type) {
    case 'TOGGLE_PAYMENT_DETAILS':
      return Object.assign({}, state, { showPaymentDetails: !state.showPaymentDetails });
    case 'TOGGLE_DONATION_COMPLETE':
      return Object.assign({}, state, { donationComplete: !state.donationComplete });
    default:
      return state;
  }
};

export default view;
