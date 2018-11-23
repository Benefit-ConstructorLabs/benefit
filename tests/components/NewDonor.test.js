import React from 'react';
import renderer from 'react-test-renderer';
import NewDonor from '../../src/components/NewDonor';

describe(NewDonor, () => {
  test('should render correctly', () => {
    const mockAddDonor = jest.fn();
    const tree = renderer.create(<NewDonor addDonor={mockAddDonor} history={{ page: '1' }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
