import React from 'react';
import renderer from 'react-test-renderer';
import NewDonor from '../../src/components/NewDonor';

describe(NewDonor, () => {
  test.skip('should render correctly', () => {
    const tree = renderer.create(<NewDonor />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
