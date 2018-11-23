import React from 'react';
import { shallow } from 'enzyme';
import RecipientBalance from '../../src/components/RecipientBalance';

describe('Animation Wrapper', () => {
  test('should render the wrapped component', () => {
    const wrapper = shallow(<RecipientBalance donations={[1, 4, 2, 5, 3]} />);
    expect(wrapper.html).not.toBe(null);
  });
});
