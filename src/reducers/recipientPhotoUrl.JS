const recipientPhotoUrl = (state = { url: '' }, action) => {
  console.log({action}, state)
    switch (action.type) {
      case 'SET_RECIPIENT_PHOTO_URL':
        return Object.assign({}, state, { url: action.url });
      default:
        return state;
    }
  };
  
  export default recipientPhotoUrl;
  