import { mapStateToProps } from '../../src/containers/NewRecipientContainer';

describe('New Recipient Container', () => {
  test('mapStateToProps extracts recipient details from state', () => {
    const mockState = {
      recipient: {
        firstName: 'Bob',
        lastName: 'Evans',
        tel: '08997485637',
        username: 'bEv23',
        password: 'qw345&S&&2234',
        photo: 'photo/url',
        reason: 'Rasing funds for CHildren in need',
        bio1: 'I like cheese',
        bio2: 'I dream of seeing the Northern Lights',
        bio3: 'I\'m allergic to chickens',
        recipientIdForQrCode: 3,
      },
    };
    const expectedOutput = {
      firstName: 'Bob',
      lastName: 'Evans',
      tel: '08997485637',
      username: 'bEv23',
      password: 'qw345&S&&2234',
      photo: 'photo/url',
      reason: 'Rasing funds for CHildren in need',
      bio1: 'I like cheese',
      bio2: 'I dream of seeing the Northern Lights',
      bio3: 'I\'m allergic to chickens',
      recipientIdForQrCode: 3,
    };
    const output = mapStateToProps(mockState);
    expect(output).toEqual(expectedOutput);
  });
});
