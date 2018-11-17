import { mapStateToProps } from '../../src/containers/QRCodeContainer';

describe('QR Code Container', () => {
  test('mapStateToProps extracts QR Code URL and recipient ID from state', () => {
    const mockState = {
      qrCodeUrl: 'https://better-change/recipient/3/donation',
      recipient: {
        recipientIdForQrCode: 3,
      },
    };
    const expectedOutput = {
      qrCodeUrl: 'https://better-change/recipient/3/donation',
      recipientIdForQrCode: 3,
    };
    const output = mapStateToProps(mockState);
    expect(output).toEqual(expectedOutput);
  });
});
