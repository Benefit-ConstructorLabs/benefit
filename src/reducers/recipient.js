const recipient = (state = { firstName: 'Bill', bio: ['I like trumpet', 'I support Arsenal'] }, action) => {
  switch (action.type) {
    case 'SET_RECIPIENT_FIRSTNAME':
      return Object.assign({}, state, { firstName: action.firstName });
    default:
      return state;
  }
};

export default recipient;
