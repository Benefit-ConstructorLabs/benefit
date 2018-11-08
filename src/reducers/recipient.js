const recipient = (state = { firstName: 'Bill', bio: ['I like trumpet', 'I support Arsenal'] }, action) => {
  switch (action.type) {
    case 'SET_RECIPIENT_FROM_DB':
      return {
        bio: action.bio,
        firstName: action.firstName,
        recipientID: action.id,
        photo: action.photo,
      };
    case 'SET_RECIPIENT_FIRSTNAME':
      return Object.assign({}, state, { firstName: action.firstName });
    default:
      return state;
  }
};

export default recipient;
