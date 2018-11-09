export function setDonationAmount(amount) {
  const donation = amount ? parseInt(amount, 10) : undefined;
  return {
    type: 'SET_DONATION_AMOUNT',
    donationAmount: donation,
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

// ////////////////////////////////////////////////////
// Nikki and Roland
// added functionality to transform form data keys ready for db. Eg: from firstName to first_name
// ///////////////////////////////////////////////////

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
