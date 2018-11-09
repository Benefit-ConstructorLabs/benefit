const donor = (state = {}, action) => {
  switch (action.type) {
    case 'SET_DONOR_INPUT':
      return Object.assign({}, state, { [action.fieldName]: action.fieldValue });
    default:
      return state;
  }
};

export default donor;
