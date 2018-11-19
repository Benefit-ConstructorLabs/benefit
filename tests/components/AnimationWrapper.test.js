import React from 'react';
import { shallow } from 'enzyme';
import AnimationWrapper from '../../src/components/AnimationWrapper';
import RecipientProfile from '../../src/components/RecipientProfile';

describe('Animation Wrapper', () => {
  test('should render the wrapped component', () => {
    const WrappedComponent = AnimationWrapper(RecipientProfile);
    const wrapper = shallow(<WrappedComponent />);
    expect(wrapper.html).not.toBe(null);
  });
});
