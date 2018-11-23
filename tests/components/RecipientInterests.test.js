import React from 'react';
import { shallow } from 'enzyme';
import RecipientInterests from '../../src/components/RecipientInterests';

describe('Animation Wrapper', () => {
  test('should render the wrapped component', () => {
    const wrapper = shallow(<RecipientInterests firstName="Terry" />);
    expect(wrapper.html).not.toBe(null);
  });
});
