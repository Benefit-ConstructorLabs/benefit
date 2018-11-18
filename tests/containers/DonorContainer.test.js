import { mapStateToProps } from '../../src/containers/DonorContainer';

describe('Doner Container', () => {
  test.skip('mapStateToProps extracts donations and profile from state', () => {
    const mockState = {
      donor: {
        donations: ['1', '2', '3'],
        photo: 'photo/url',
        firstName: 'Dave',
        lastName: 'Johnson',
        username: 'DJ23',
        tel: '07558549543',
      },
    };
    const expectedOutput = {
      donations: ['1', '2', '3'],
      profile: {
        photo: 'photo/url',
        firstName: 'Dave',
        lastName: 'Johnson',
        username: 'DJ23',
        tel: '07558549543',
      },
    };
    const output = mapStateToProps(mockState);
    expect(output).toEqual(expectedOutput);
  });
});
