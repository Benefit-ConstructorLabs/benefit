import React from 'react'
import NewDonation from '../../src/components/NewDonation';
import renderer from 'react-test-renderer';

describe('NewDonation', () => {
  test('should render correctly', () => {
    const tree = renderer
      .create(<NewDonation />)
      .toJSON()
    expect(tree).toMatchSnapshot();
  });
})