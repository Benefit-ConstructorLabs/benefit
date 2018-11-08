const qrCodeUrl = (state = '', action) => {
    switch (action.type) {
      case 'SET_QRCODE_URL':
        return action.QRCodeUrl;
      default:
        return state;
    }
  };
  
  export default qrCodeUrl;