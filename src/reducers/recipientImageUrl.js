const recipientImageUrl = (state = { url: '' }, action) => {
  switch (action.type) {
    case 'SET_RECIPIENT_PHOTO_URL':
      return Object.assign({}, state, { url: action.url });
    default:
      return state;
  }
};

export default recipientImageUrl;
