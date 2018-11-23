import React from 'react';
import renderer from 'react-test-renderer';
import NewRecipient from '../../src/components/NewRecipient';

describe(NewRecipient, () => {
  test('matches the snapshot', () => {
    const mockAddRecipient = jest.fn();
    const tree = renderer.create(<NewRecipient addRecipient={mockAddRecipient} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
