
import React from 'react';
import { PaymentRequestButtonElement, injectStripe } from 'react-stripe-elements';

class PaymentRequestButton extends React.Component {
  constructor(props) {
    super(props);

    // For full documentation of the available paymentRequest options, see:
    // https://stripe.com/docs/stripe.js#the-payment-request-object
    const paymentRequest = props.stripe.paymentRequest({
      country: 'GB',
      currency: 'gbp',
      total: {
        label: 'Demo total',
        amount: props.donationAmount * 100,
      },
      requestPayerName: true,
      requestPayerEmail: true,
    });

    paymentRequest.on('token', ( {complete, token, ...data} ) => {
      console.log('Received Stripe token: ', token);
      console.log('Received customer information: ', data);
      const test_token = 'tok_visa';
      this.props.createPaymentDetails(test_token);
      this.props.toggleDonationComplete();
      complete('success');
    });

    paymentRequest.canMakePayment().then((result) => {
      this.setState({ canMakePayment: !!result });
    });

    this.state = {
      canMakePayment: false,
      paymentRequest,
    };
  }

  render() {
    return this.state.canMakePayment ? (
      <PaymentRequestButtonElement
        paymentRequest={this.state.paymentRequest}
        className="PaymentRequestButton"
        style={{
          // For more details on how to style the Payment Request Button, see:
          // https://stripe.com/docs/elements/payment-request-button#styling-the-element
          paymentRequestButton: {
            theme: 'light',
            height: '64px',
          },
        }}
      />
    ) : null;
  }
}
export default injectStripe(PaymentRequestButton);
