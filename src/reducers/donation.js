const donation = (state = { donationAmount: 2, donationID: 0 }, action) => {
  switch (action.type) {
    case 'SET_DONATION_AMOUNT':
      return Object.assign({}, state, { donationAmount: action.donationAmount });
    case 'SET_DONATION_ID':
      return Object.assign({}, state, { donationID: action.donationID });
    default:
      return state;
  }
};

export default donation;
