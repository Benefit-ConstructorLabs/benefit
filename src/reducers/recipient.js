const recipient = (state = { firstName: 'Bill' }, action) => {
  switch (action.type) {
    case 'SET_RECIPIENT_FIRSTNAME':
      return Object.assign({}, state, { firstName: action.firstName });
    default:
      return state;
  }
};

export default recipient;
