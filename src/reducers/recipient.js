const recipient = (state = { firstName: '', bio: [], photo: '' }, action) => {
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
    // TODO is this in use?
    case 'SET_RECIPIENT_FIRSTNAME':
      return Object.assign({}, state, { firstName: action.firstName });
    default:
      return state;
  }
};

export default recipient;
