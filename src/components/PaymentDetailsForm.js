import React from 'react';
import PropTypes from 'prop-types';
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


PaymentDetailsForm.propTypes = {
  createPaymentDetails: PropTypes.func.isRequired,
  toggleDonationComplete: PropTypes.func.isRequired,
  donationAmount: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
};

export default injectStripe(PaymentDetailsForm);
