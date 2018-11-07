const donation = (state = { donationAmount: 1 }, action) => {
  switch (action.type) {
    case 'SET_DONATION_AMOUNT':
      return Object.assign({}, state, { donationAmount: action.donationAmount });
    default:
      return state;
  }
};

export default donation;
