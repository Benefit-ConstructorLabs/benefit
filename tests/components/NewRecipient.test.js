import React from 'react';
import renderer from 'react-test-renderer';
import NewRecipient from '../../src/components/NewRecipient';

describe(NewRecipient, () => {
  test('matches the snapshot', () => {
    const tree = renderer.create(<NewRecipient />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
