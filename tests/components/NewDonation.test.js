import React from 'react';
import renderer from 'react-test-renderer';
import NewDonation from '../../src/components/NewDonation';

describe('NewDonation', () => {
  test('should render correctly', () => {
    const tree = renderer
      .create(<NewDonation />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
