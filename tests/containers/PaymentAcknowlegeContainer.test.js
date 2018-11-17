import { mapStateToProps } from '../../src/containers/PaymentAcknowlegeContainer';

describe(' Payment Acknowledge Container', () => {
  test('mapStateToProps extracts recipient name from state', () => {
    const mockState = {
      recipient: {
        firstName: 'Bob',
      },
    };
    const expectedOutput = {
      firstName: 'Bob',
    };
    const output = mapStateToProps(mockState);
    expect(output).toEqual(expectedOutput);
  });
});
