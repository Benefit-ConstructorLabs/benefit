const paymentDetails = (state = {
  stripeToken: '',
}, action) => {
  switch (action.type) {
    case 'RECEIVE_STRIPE_TOKEN':
      return Object.assign({}, state, { stripeToken: action.stripeToken });
    default:
      return state;
  }
};

export default paymentDetails;
