const recipientImage = (state = { url: '', uploadBlur: false }, action) => {
  switch (action.type) {
    case 'SET_RECIPIENT_IMAGE_URL':
      return Object.assign({}, state, { url: action.url });
    case 'SET_UPLOAD_BLUR':
      return Object.assign({}, state, { uploadBlur: action.blur });
    default:
      return state;
  }
};

export default recipientImage;
