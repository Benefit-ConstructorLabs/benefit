const recipient = (state = { firstName: '' }, action) => {
  switch (action.type) {
    case 'SET_RECIPIENT_INPUT':
      return Object.assign({}, state, { [action.fieldName]: action.fieldValue });
    default:
      return state;
  }
};

export default recipient;
