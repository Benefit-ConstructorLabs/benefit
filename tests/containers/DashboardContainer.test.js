import { mapStateToProps } from '../../src/containers/DashboardContainer';

describe('Dashboard Container', () => {
  test('mapStateToProps extracts id and donations from state', () => {
    const mockState = {
      organisation: {
        id: 1,
        donations: ['1', '2', '3'],
      },
    };
    const expectedOutput = {
      id: 1,
      donations: ['1', '2', '3'],
    };
    const output = mapStateToProps(mockState);
    expect(output).toEqual(expectedOutput);
  });
});
