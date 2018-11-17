import { mapStateToProps } from '../../src/containers/AppHeaderContainer';

describe('App Header Container', () => {
  test('mapStateToProps extracts isLoggedIn, name, userID & userType from state', () => {
    const mockState = {
      login: {
        isLoggedIn: true,
        name: 'Dave',
        userId: 3,
        userType: 'donor',
      },
    };
    const expectedOutput = {
      isLoggedIn: true,
      name: 'Dave',
      userID: 3,
      userType: 'donor',
    };
    const output = mapStateToProps(mockState);
    expect(output).toEqual(expectedOutput);
  });
});
