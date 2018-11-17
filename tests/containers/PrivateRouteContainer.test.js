import { mapStateToProps } from '../../src/containers/PrivateRouteContainer';

describe('Private Route Container', () => {
  test('mapStateToProps extracts value of isLoggedIn from state', () => {
    const mockState = {
      login: {
        isLoggedIn: true,
      },
    };
    const expectedOutput = {
      isLoggedIn: true,
    };
    const output = mapStateToProps(mockState);
    expect(output).toEqual(expectedOutput);
  });
});
