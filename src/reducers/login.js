const login = (
  state = { isLoggedIn: false, userId: null, username: '', userType: null, password: '' },
  action,
) => {
  switch (action.type) {
    case 'SET_LOGIN_DETAILS':
      return Object.assign({}, state, { [action.fieldName]: action.fieldValue });
    case 'SET_USER_FROM_PASSPORT':
      return Object.assign({}, state, {
        isLoggedIn: true,
        userId: action.userID,
        userType: action.userType,
      });
    case 'SET_LOGOUT':
      return Object.assign({}, state, {
        isLoggedIn: false,
        userId: null,
        username: '',
        userType: null,
        password: '',
      });
    default:
      return state;
  }
};

export default login;
