import { mapStateToProps } from '../../src/containers/AppWrapperContainer';

describe('App Wrapper Container', () => {
  test.skip('mapStateToProps extracts hasCheckedUser from state', () => {
    const mockState = {
      login: {
        hasCheckedUser: true,
      },
    };
    const expectedOutput = {
      hasCheckedUser: true,
    };
    const output = mapStateToProps(mockState);
    expect(output).toEqual(expectedOutput);
  });
});
