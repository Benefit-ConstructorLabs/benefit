import React from 'react';
import { shallow } from 'enzyme';
import DonorBalance from '../../src/components/DonorBalance';

describe('Animation Wrapper', () => {
  test('should render the wrapped component', () => {
    const wrapper = shallow(<DonorBalance donations={[1, 2, 3, 4]} />);
    expect(wrapper.html).not.toBe(null);
  });
});
