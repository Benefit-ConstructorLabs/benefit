import { mapStateToProps } from '../../src/containers/LoginContainer';

describe('Login Container', () => {
  test('mapStateToProps extracts isLoggedIn, userUID, username, userType and password from state', () => {
    const mockState = {
      login: {
        isLoggedIn: true,
        userId: 3,
        username: 'Johnno',
        userType: 'recipient',
        password: 'q23879qhp1%@£$F',
      },
    };
    const expectedOutput = {
      isLoggedIn: true,
      userID: 3,
      username: 'Johnno',
      userType: 'recipient',
      password: 'q23879qhp1%@£$F',
    };
    const output = mapStateToProps(mockState);
    expect(output).toEqual(expectedOutput);
  });
});
