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

export function getQRCode (id, QRCodePackage, canvas) { 
    fetch(`/api/recipient/${id}`)
    .then(response => response.json())
    .then(body => {
      const QRCodeUrl = `http://www.benefit.com/recipient/${body[0].id}`;
      QRCodePackage.toCanvas(
        canvas,
        QRCodeUrl,
        {
          errorCorrectionLevel: 'M',
          maskPattern: 4,
          scale: 4,
          version: 5,
          color: {
            dark: '#003366FF',
            light: '#CDF8FFCC'
          }
        },
        error => {
          if (error) {
            // console.error(error);
          }
          // console.log('success!');
        }
      );
      return {
        type: 'SET_QRCODE_URL',
        QRCodeUrl
      };
    })
    .catch(error => response.json({ error: error.message }));
  }
