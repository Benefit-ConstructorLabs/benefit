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

export function addRecipient() {
  return function (dispatch, getState) {
    const state = getState();
    fetch('/api/recipient', {
      method: 'post',
      body: JSON.stringify(state.recipient),
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
