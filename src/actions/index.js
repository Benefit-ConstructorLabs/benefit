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

export function setDonorID() {
  return {
    type: 'SET_DONOR_ID',
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
        amount: donation.donationAmount * 100,
        stripe_id: token,
      },
    };
    console.log('donation object sent to server', newDataKeysObject);
    fetch('/api/donation', {
      method: 'post',
      body: JSON.stringify(newDataKeysObject),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then((donationID) => {
        console.log('returned transaction id', donationID.transaction_id);
        dispatch(receiveStripeToken(token));
        dispatch(setDonationID(donationID.transaction_id));
      });
  };
}

export function submitRecipientForm() {
  return {
    type: 'SUBMIT_RECIPIENT_FORM',
  };
}

export function setRecipientIdForQrCode(id) {
  return {
    type: 'SET_RECIPIENT_ID',
    id,
  };
}

export function addRecipient(recipient) {
  return function (dispatch) {
    fetch('/api/recipient', {
      method: 'post',
      body: JSON.stringify(recipient),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then((body) => {
        dispatch(setRecipientIdForQrCode(body.recipient_id));
      })
      .catch(error => console.error(error));
  };
}

export function setNewDonorId(newDonorId) {
  return {
    type: 'SET_NEW_DONOR_ID',
    newDonorId,
  };
}

export function addDonor(donor) {
  return function (dispatch) {
    fetch('/api/donor', {
      method: 'post',
      body: JSON.stringify(donor),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then((newDonor) => {
        console.info(newDonor);
        dispatch(setNewDonorId(newDonor.id));
      })
      .catch(error => console.error(error));
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
  return {
    type: 'SET_USER_FROM_PASSPORT',
    isLoggedIn: true,
    userID: user.userId,
    userType: user.userType,
    name: user.name,
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
        dispatch(setUserFromPassport(loggedinUser));
      })
      .catch(error => console.log('FETCH to POST ERROR', error.message));
  };
}

export function checkLogin() {
  return function (dispatch) {
    fetch('/api/user', { credentials: 'same-origin' })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`HTTP Error ${response.status} (${response.statusText})`);
      })
      .then((user) => {
        if (user.userId) {
          dispatch(setUserFromPassport(user));
        }
      })
      .catch(error => console.log('FETCH to GET ERROR', error.message));
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

export function getDonationsByRecipientID(id) {
  return function (dispatch) {
    fetch(`/api/donations/recipient/${id}`, { credentials: 'same-origin' })
      .then(response => response.json())
      .then(donations => dispatch(setDonationsFromDB(donations)))
      .catch(error => console.log(error.message));
  };
}

export function getProfileDetailsByID(id) {
  return function (dispatch) {
    dispatch(getDonationsByRecipientID(id));
    dispatch(getRecipientFromDB(id));
  };
}

export function setDonorDonationsFromDB(donations) {
  return {
    type: 'SET_DONOR_DONATIONS_FROM_DB',
    donations,
  };
}

export function getDonationsByDonorID(id) {
  return function (dispatch) {
    fetch(`/api/donations/donor/${id}`, { credentials: 'same-origin' })
      .then(response => response.json())
      .then(donations => dispatch(setDonorDonationsFromDB(donations)))
      .catch(error => console.log(error.message));
  };
}

export function setDonorFromDB(donor) {
  return {
    type: 'SET_DONOR_FROM_DB',
    id: donor.id,
    firstName: donor.first_name,
    lastName: donor.last_name,
    username: donor.username,
    tel: donor.tel,
    photo: donor.photo,
  };
}

export function getDonorFromDB(id) {
  return function (dispatch) {
    fetch(`/api/donor/${id}`, { credentials: 'same-origin' })
      .then(response => response.json())
      .then(donor => dispatch(setDonorFromDB(donor)))
      .catch(error => console.log('FETCH ERROR', error.message));
  };
}

export function getDonorDetailsByID(id) {
  return function (dispatch) {
    dispatch(getDonationsByDonorID(id));
    dispatch(getDonorFromDB(id));
  };
}
