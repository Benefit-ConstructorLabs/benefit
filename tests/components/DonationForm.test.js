import React from 'react'
import DonationForm from '../../src/components/DonationForm';
import renderer from 'react-test-renderer';

describe('App', () => {
  test('should render correctly', () => {
    const tree = renderer
      .create(<DonationForm />)
      .toJSON()
    expect(tree).toMatchSnapshot();
  });
})