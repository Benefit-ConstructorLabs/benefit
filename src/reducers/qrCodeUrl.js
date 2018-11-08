const qrCodeUrl = (state = '', action) => {
    switch (action.type) {
      case 'SET_QRCODE_URL':
        return action.qrCodeUrl;
      default:
        return state;
    }
  };
  
  export default qrCodeUrl;