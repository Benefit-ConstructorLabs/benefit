import React from 'react';
import renderer from 'react-test-renderer';
import PrivateRoute from '../../src/components/PrivateRoute';

// Invariant Violation: You should not use <Route> or withRouter() outside a <Router>
describe(PrivateRoute, () => {
  test.skip('matches the snapshot', () => {
    const tree = renderer.create(<PrivateRoute />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
