export function setDonationAmount(amount) {
  const donationValue = amount.replace('£', '');
  const donation = donationValue ? parseInt(donationValue, 10) : undefined;
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
        const qrCodeUrl = `/recipient/${body.id}/donation`;
        dispatch({
          type: 'SET_QRCODE_URL',
          qrCodeUrl,
        });
      })
      .catch(error => console.log(error));
  };
}

export function setRecipientFromDB(recipient) {
  return {
    type: 'SET_RECIPIENT_FROM_DB',
    id: recipient.id,
    firstName: recipient.first_name,
    lastName: recipient.last_name,
    username: recipient.username,
    tel: recipient.tel,
    photo: recipient.photo,
    bio: recipient.bio,
  };
}

export function getRecipientFromDB(id) {
  return function (dispatch) {
    fetch(`/api/recipient/${id}`, { credentials: 'same-origin' })
      .then(response => response.json())
      .then(recipient => dispatch(setRecipientFromDB(recipient)))
      .catch(error => console.log('FETCH ERROR', error.message));
  };
}

export function receiveStripeToken(stripeToken) {
  return {
    type: 'RECEIVE_STRIPE_TOKEN',
    stripeToken,
  };
}

export function setDonorID(donorID) {
  return {
    type: 'SET_DONOR_ID',
    donorID,
  };
}
export function setDonationID(donationID) {
  return {
    type: 'SET_DONATION_ID',
    donationID,
  };
}

// Create donation, send details to stripe and receive back token
// Stripe token hardcoded
export function createPaymentDetails(token) {
  return function (dispatch, getState) {
    const { donor, recipient, donation } = getState();
    const newDataKeysObject = {
      donation: {
        recipient_id: recipient.recipientID,
        donor_id: donor.donorID,
        amount: (donation.donationAmount * 100),
        stripe_id: token,
      },
    };
    console.log(newDataKeysObject);
    fetch('/api/donation', {
      method: 'post',
      body: JSON.stringify(newDataKeysObject),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then((donationID) => {
        console.log(donationID.transaction_id);
        dispatch(receiveStripeToken(token));
        dispatch(setDonationID(donationID.transaction_id));
      });

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

export function setRecipientIdForQrCode(id) {
  return {
    type: 'SET_RECIPIENT_ID',
    id,
  };
}

export function addRecipient() {
  return function (dispatch, getState) {
    const { recipient, recipientImageUrl } = getState();
    const newDataKeysObject = {
      first_name: recipient.firstName,
      last_name: recipient.lastName,
      username: recipient.username,
      password: recipient.password,
      photo: recipientImageUrl.url,
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
      .then((body) => {
        dispatch(setRecipientIdForQrCode(body.recipient_id));
      });
  };
}

export function setDonorInputField(fieldName, fieldValue) {
  return {
    type: 'SET_DONOR_INPUT',
    fieldName,
    fieldValue,
  };
}

export function addDonor() {
  return function (dispatch, getState) {
    const { donor } = getState();
    const newDataKeysObject = {
      first_name: donor.firstName,
      last_name: donor.lastName,
      email: donor.email,
      password: donor.password,
      tel: donor.tel,
    };
    fetch('/api/donor', {
      method: 'post',
      body: JSON.stringify(newDataKeysObject),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then((donorID) => {
        console.log(donorID);
      });
  };
}

// passport actions
export function setLoginDetails(fieldName, fieldValue) {
  return {
    type: 'SET_LOGIN_DETAILS',
    fieldName,
    fieldValue,
  };
}

export function setUserFromPassport(user) {
  console.log(user, 'from setUserFromPassport');
  return {
    type: 'SET_USER_FROM_PASSPORT',
    isLoggedIn: true,
    userID: user.userId,
    // username: user.username,
    userType: user.userType,
  };
}

export function login() {
  return function (dispatch, getState) {
    const { login: user } = getState();
    const loginData = {
      username: user.username,
      password: user.password,
    };
    fetch('/api/login', {
      method: 'post',
      body: JSON.stringify(loginData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`HTTP Error ${response.status} (${response.statusText})`);
      })
      .then((loggedinUser) => {
        console.log(loggedinUser);
        dispatch(setUserFromPassport(loggedinUser));
      })
      .catch(error => console.log('FETCH to POST ERROR', error.message));
  };
}

export function setLogout() {
  return { type: 'SET_LOGOUT' };
}

export function logout() {
  return function (dispatch) {
    fetch('/api/logout')
      .then(response => response.json())
      .then((body) => {
        console.log(body);
        dispatch(setLogout());
      })
      .catch(error => console.log(error));
  };
}

export function setDonationsFromDB(donations) {
  return {
    type: 'SET_RECIEVED_DONATIONS_FROM_DB',
    donations,
  };
}

export function getDonationsByID(id) {
  return function (dispatch) {
    fetch(`/api/donations/${id}`)
      .then(response => response.json())
      .then(donations => dispatch(setDonationsFromDB(donations)))
      // .then(() => dispatch(getRecipientFromDB(id)))
      .catch(error => console.log(error.message));
  };
}

export function getProfileDetailsByID(id) {
  return function (dispatch) {
    dispatch(getDonationsByID(id));
    dispatch(getRecipientFromDB(id));
  };
}
