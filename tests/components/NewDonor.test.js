import React from 'react';
import renderer from 'react-test-renderer';
import NewDonor from '../../src/components/NewDonor';

describe(NewDonor, () => {
  test('should render correctly', () => {
    const tree = renderer.create(<NewDonor />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
