export function setDonationAmount(amount) {
  const donation = amount ? parseInt(amount, 10) : undefined;
  return {
    type: 'SET_DONATION_AMOUNT',
    donationAmount: donation,
  };
}

export function togglePaymentDetails() {
  return {
    type: 'TOGGLE_PAYMENT_DETAILS',
  };
}

export function setRecipientFromDB(recipient) {
  return {
    type: 'SET_RECIPIENT_FROM_DB',
    id: recipient.id,
    firstName: recipient.first_name,
    photo: recipient.photo,
    bio: recipient.bio,
  };
}

export function setCardInput(cardNumber) {
  return {
    type: 'SET_CARD_INPUT',
    cardNumber,
  };
}

export function setExpDateInput(expDate) {
  return {
    type: 'SET_EXP_DATE_INPUT',
    expDate,
  };
}

export function setCcvInput(ccv) {
  return {
    type: 'SET_CCV_INPUT',
    ccv,
  };
}

export function receiveStripeToken(stripeToken) {
  return {
    type: 'RECEIVE_STRIPE_TOKEN',
    stripeToken,
  };
}

// A temporary function to send payment details off to stripe and receive back a fake stripe token
export function createPaymentDetails() {
  return function (dispatch) {
    const temporaryStripeToken = 'tok_1DTtwg2eZvKYlo2C0OVGbY7U';
    dispatch(receiveStripeToken(temporaryStripeToken));
    dispatch(setCardInput(''));
    dispatch(setExpDateInput(''));
    dispatch(setCcvInput(''));
  };
}

