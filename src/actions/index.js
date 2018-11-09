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

export function toggleDonationComplete() {
  return {
    type: 'TOGGLE_DONATION_COMPLETE',
  };
}

export function setRecipientPhotoUrl(url) {
  return {
    type: 'SET_RECIPIENT_PHOTO_URL',
    url,
  };
}

export function getQRCode(id) {
  return function (dispatch) {
    fetch(`/api/recipient/${id}`)
      .then(response => response.json())
      .then((body) => {
        const qrCodeUrl = `/recipient/${body[0].id}/donation`;
        dispatch(
          {
            type: 'SET_QRCODE_URL',
            qrCodeUrl,
          },
        );
      })
      .catch(error => console.log(error));
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

export function getRecipientFromDB(id) {
  return function (dispatch) {
    fetch(`/api/recipient/${id}`)
      .then(response => response.json())
      .then(recipient => dispatch(setRecipientFromDB(recipient)))
      .catch(error => console.log('FETCH ERROR', error.message));
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

export function submitRecipientForm() {
  return {
    type: 'SUBMIT_RECIPIENT_FORM',
  };
}

export function setInputField(fieldName, fieldValue) {
  return {
    type: 'SET_RECIPIENT_INPUT',
    fieldName,
    fieldValue,
  };
}

export function addRecipient() {
  return function (dispatch, getState) {
    const { recipient } = getState();
    const newDataKeysObject = {
      first_name: recipient.firstName,
      last_name: recipient.lastName,
      username: recipient.username,
      password: recipient.password,
      photo: recipient.photo,
      tel: recipient.tel,
      bio_1: recipient.bio1,
      bio_2: recipient.bio2,
      bio_3: recipient.bio3,
    };
    fetch('/api/recipient', {
      method: 'post',
      body: JSON.stringify(newDataKeysObject),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then((recipientID) => {
        console.log(recipientID);
      });
  };
}

