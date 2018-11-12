const recipient = (state = { firstName: '', bio: [], photo: '', donations: [] }, action) => {
  switch (action.type) {
    case 'SET_RECIPIENT_INPUT':
      return Object.assign({}, state, { [action.fieldName]: action.fieldValue });
    case 'SET_RECIPIENT_FROM_DB':
      return {
        bio: action.bio,
        firstName: action.firstName,
        recipientID: action.id,
        photo: action.photo,
      };
    case 'SET_RECIPIENT_ID':
      return Object.assign({}, state, { recipientIdForQrCode: action.id });
    case 'SET_RECIPIENT_DONATIONS_FROM_DB':
      return Object;
    default:
      return state;
  }
};

export default recipient;
