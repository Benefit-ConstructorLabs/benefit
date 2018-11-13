import React from 'react';
import '../../styles/components/payment-details-form.scss';
import {injectStripe} from 'react-stripe-elements';

// import AddressSection from './AddressSection';
import CardSection from './CardSection';

const PaymentDetailsForm = ({ stripe, createPaymentDetails, toggleDonationComplete, donationAmount, firstName }) => {

  return (
    <div className="payment-details">
      <h2>Set up payment</h2>
      <p>Already have an account?</p>
      <button className="btn" type="button">Login</button>

      <h3 className="payment-details__heading">Continue donating anonymously</h3>
      <form
        className="payment-details__form"
        onSubmit={(event) => {
          event.preventDefault();
          // create stripe token from card details
          // Within the context of `Elements`, this call to createToken knows which Element to
          // tokenize, since there's only one in this group.
          // stripe.createToken(element, tokenData)
          stripe.createToken()
            .then(({ token }) => {
              console.log('Received Stripe token:', token);
              toggleDonationComplete();
              createPaymentDetails(token.id);
            });
        }}
      >
        <CardSection />
        <button className="btn btn__primary btn__submit" type="submit">{`Donate £${donationAmount} to ${firstName}`}</button>
      </form>
    </div>
  );
};

export default injectStripe(PaymentDetailsForm);
