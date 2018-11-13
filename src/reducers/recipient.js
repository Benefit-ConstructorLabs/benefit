const recipient = (state = { firstName: '', bio: [], photo: '', donations: [] }, action) => {
  switch (action.type) {
    // case 'SET_RECIPIENT_INPUT':
    //   return Object.assign({}, state, { [action.fieldName]: action.fieldValue });
    case 'SET_RECIPIENT_FROM_DB':
      return Object.assign({}, state, {
        bio: action.bio,
        firstName: action.firstName,
        lastName: action.lastName,
        username: action.username,
        tel: action.tel,
        recipientID: action.id,
        photo: action.photo,
      });
    case 'SET_RECIPIENT_ID':
      return Object.assign({}, state, { recipientIdForQrCode: action.id });
    case 'SET_RECIEVED_DONATIONS_FROM_DB':
      return Object.assign({}, state, { donations: action.donations });
    default:
      return state;
  }
};

export default recipient;
