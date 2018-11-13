const donor = (
  state = {
    id: null,
    donorID: 1,
    firstName: '',
    lastName: '',
    tel: '',
    email: '',
    password: '',
    cardNo: '',
    cardExp: '',
    cardCCV: '',
  },
  action,
) => {
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
