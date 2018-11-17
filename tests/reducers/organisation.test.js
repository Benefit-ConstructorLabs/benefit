import organisation from '../../src/reducers/organisation';

describe('organisation reducer', () => {
  test('executes SET_ORGANISATION_DONATIONS action', () => {
    const initialState = { id: 1, donations: [] }
    const action = {
      type: 'SET_ORGANISATION_DONATIONS',
      donations: [30, 40, 25, 65],
    };
    const expectedState = { id: 1, donations: [30, 40, 25, 65] };
    const outputState = organisation(initialState, action);
    expect(outputState).toEqual(expectedState);
  });
});
