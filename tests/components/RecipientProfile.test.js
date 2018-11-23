import React from 'react';
import { shallow } from 'enzyme';
import RecipientProfile from '../../src/components/RecipientProfile';

describe('Animation Wrapper', () => {
  test('should render the wrapped component', () => {
    const mockProfile = {
      firstName: 'Nigel',
      lastName: 'Green',
      photo: 'photo/url',
      username: 'nige25',
      tel: '0233212382',
      bio: ['something', 'bits', 'stuff'],
      reason: 'Raising money for Batterea Dogs Home',
    };
    const wrapper = shallow(<RecipientProfile label="Profile" profile={mockProfile} />);
    expect(wrapper.html).not.toBe(null);
  });
});
