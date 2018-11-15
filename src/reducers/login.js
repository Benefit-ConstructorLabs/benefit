const login = (
  state = {
    isLoggedIn: false,
    userId: null,
    username: '',
    userType: null,
    password: '',
    name: '',
    hasCheckedUser: false,
  },
  action,
) => {
  switch (action.type) {
    case 'SET_HAS_CHECKED_USER':
      return Object.assign({}, state, { hasCheckedUser: true });
    case 'SET_LOGIN_DETAILS':
      return Object.assign({}, state, { [action.fieldName]: action.fieldValue });
    case 'SET_USER_FROM_PASSPORT':
      return Object.assign({}, state, {
        isLoggedIn: true,
        userId: action.userID,
        userType: action.userType,
        name: action.name,
      });
    case 'SET_LOGOUT':
      return Object.assign({}, state, {
        isLoggedIn: false,
        userId: null,
        username: '',
        userType: null,
        password: '',
        name: '',
      });
    default:
      return state;
  }
};

export default login;
