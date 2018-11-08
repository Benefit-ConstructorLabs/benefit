const paymentDetails = (state = {
  cardNumber: '',
  expDate: '',
  ccv: '',
}, action) => {
  switch (action.type) {
    case 'SET_CARD_INPUT':
      return Object.assign({}, state, { cardNumber: action.cardNumber });
    case 'SET_EXP_DATE_INPUT':
      return Object.assign({}, state, { expDate: action.expDate });
    case 'SET_CCV_INPUT':
      return Object.assign({}, state, { ccv: action.ccv });
    default:
      return state;
  }
};

export default paymentDetails;
