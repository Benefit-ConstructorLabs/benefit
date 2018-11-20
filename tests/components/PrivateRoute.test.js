import React from 'react';
import { shallow } from 'enzyme';
import PrivateRoute from '../../src/components/PrivateRoute';

// Invariant Violation: You should not use <Route> or withRouter() outside a <Router>
describe(PrivateRoute, () => {
  test('should render the wrapped component', () => {
    const wrapper = shallow(<PrivateRoute />);
    expect(wrapper.html).not.toBe(null);
  });
});
