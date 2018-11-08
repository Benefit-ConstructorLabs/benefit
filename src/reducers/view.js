const view = (state = { togglePaymentDetails: false }, action) => {
  switch (action.type) {
    case 'TOGGLE_PAYMENT_DETAILS':
      return Object.assign({}, state, { togglePaymentDetails: !state.togglePaymentDetails });
    default:
      return state;
  }
};

export default view;
