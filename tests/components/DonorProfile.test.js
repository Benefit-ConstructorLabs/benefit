import React from 'react';
import { shallow } from 'enzyme';
import DonorProfile from '../../src/components/DonorProfile';

describe('Animation Wrapper', () => {
  test('should render the wrapped component', () => {
    const wrapper = shallow(<DonorProfile profile={['Ted']} />);
    expect(wrapper.html).not.toBe(null);
  });
});
