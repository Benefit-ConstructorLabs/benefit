import login from '../../src/reducers/login';

describe('login reducer', () => {
  const initialState = {
    isLoggedIn: false,
    userId: null,
    username: '',
    userType: null,
    password: '',
    name: '',
    hasCheckedUser: false,
  };
  test('executes SET_HAS_CHECKED_USER action', () => {
    const action = {
      type: 'SET_HAS_CHECKED_USER',
      hasCheckedUser: true,
    };
    const expectedState = {
      isLoggedIn: false,
      userId: null,
      username: '',
      userType: null,
      password: '',
      name: '',
      hasCheckedUser: true,
    };
    const outputState = login(initialState, action);
    expect(outputState).toEqual(expectedState);
  });
  test('executes SET_LOGIN_DETAILS action', () => {
    const action = {
      type: 'SET_LOGIN_DETAILS',
      fieldName: 'username',
      fieldValue: 'Babsie',
    };
    const expectedState = {
      isLoggedIn: false,
      userId: null,
      username: 'Babsie',
      userType: null,
      password: '',
      name: '',
      hasCheckedUser: false,
    };
    const outputState = login(initialState, action);
    expect(outputState).toEqual(expectedState);
  });
  test('executes SET_USER_FROM_PASSPORT action', () => {
    const action = {
      type: 'SET_USER_FROM_PASSPORT',
      isLoggedIn: true,
      userID: 3,
      userType: 'donor',
      name: 'Terry',
    };
    const expectedState = {
      isLoggedIn: true,
      userId: 3,
      username: '',
      userType: 'donor',
      password: '',
      name: 'Terry',
      hasCheckedUser: false,
    };
    const outputState = login(initialState, action);
    expect(outputState).toEqual(expectedState);
  });
  test('executes SET_LOGOUT action', () => {
    const action = {
      type: 'SET_LOGOUT',
    };
    const expectedState = {
      isLoggedIn: false,
      userId: null,
      username: '',
      userType: null,
      password: '',
      name: '',
      hasCheckedUser: false,
    };
    const outputState = login(initialState, action);
    expect(outputState).toEqual(expectedState);
  });
});
