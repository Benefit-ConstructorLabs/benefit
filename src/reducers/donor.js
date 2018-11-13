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
    case 'SET_DONOR_FROM_DB':
      return Object.assign({}, state, {
        id: action.id,
        firstName: action.firstName,
        lastName: action.lastName,
        username: action.username,
        tel: action.tel,
        photo: action.photo,
      });
    case 'SET_DONOR_DONATIONS_FROM_DB':
      return Object.assign({}, state, { donations: action.donations });
    case 'SET_DONOR_ID':
      return Object.assign({}, state, { donorID: action.donorID });
    default:
      return state;
  }
};

export default donor;
