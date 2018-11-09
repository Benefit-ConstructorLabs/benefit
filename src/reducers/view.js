const view = (state = { showPaymentDetails: false }, action) => {
  switch (action.type) {
    case 'TOGGLE_PAYMENT_DETAILS':
      return Object.assign({}, state, { showPaymentDetails: !state.shoowPaymentDetails });
    default:
      return state;
  }
};

export default view;
