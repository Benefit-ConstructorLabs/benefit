const paymentDetails = (state = {
  cardNumber: '',
  expDate: '',
  ccv: '',
  stripeToken: '',
}, action) => {
  switch (action.type) {
    case 'SET_CARD_INPUT':
      return Object.assign({}, state, { cardNumber: action.cardNumber });
    case 'SET_EXP_DATE_INPUT':
      return Object.assign({}, state, { expDate: action.expDate });
    case 'SET_CCV_INPUT':
      return Object.assign({}, state, { ccv: action.ccv });
    case 'RECEIVE_STRIPE_TOKEN':
      return Object.assign({}, state, { stripeToken: action.stripeToken });
    default:
      return state;
  }
};

export default paymentDetails;
