const donor = (state = { showSignUp: false }, action) => {
  switch (action.type) {
    case 'TOGGLE_SIGNUP':
      return Object.assign({}, state, { showSignUp: true });
    default:
      return state;
  }
};

export default donor;
