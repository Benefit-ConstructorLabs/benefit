export function setDonationAmount(amount) {
  const donation = amount ? parseInt(amount, 10) : undefined;
  return {
    type: 'SET_DONATION_AMOUNT',
    donationAmount: donation,
  };
}

export function setRecipientPhotoUrl(url) {
  return {
    type: 'SET_RECIPIENT_PHOTO_URL',
    url
  };
}

export function getQRCode (id) { 
  return function(dispatch) {
    fetch(`/api/recipient/${id}`)
    .then(response => response.json())
    .then(body => {
      const qrCodeUrl = `http://www.benefit.com/recipient/${body[0].id}`;
      dispatch(
        {
          type: 'SET_QRCODE_URL',
          qrCodeUrl
        }
      )
    })
    .catch(error => console.log(error));
  }
}




