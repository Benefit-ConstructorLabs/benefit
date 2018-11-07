import React from 'react';
import renderer from 'react-test-renderer';
import DonationForm from '../../src/components/DonationForm';

describe('DonationForm', () => {
  test('should render correctly', () => {
    const tree = renderer
      .create(<DonationForm />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
