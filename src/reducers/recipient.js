const recipient = (state = { first_name: '' }, action) => {
  console.log(state);
  switch (action.type) {
    case 'SET_RECIPIENT_INPUT':
      return Object.assign({}, state, { [action.fieldName]: action.fieldValue });
    case 'SUBMIT_RECIPIENT_FORM':
      return state;
    default:
      return state;
  }
};

export default recipient;
