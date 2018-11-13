const donor = (state = { donorID: 1 }, action) => {
  switch (action.type) {
    case 'SET_DONOR_INPUT':
      return Object.assign({}, state, { [action.fieldName]: action.fieldValue });
    case 'SET_DONOR_ID':
      return Object.assign({}, state, { donorID: action.donorID });
    default:
      return state;
  }
};

export default donor;
