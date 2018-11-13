import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/payment-details-form.scss';
import {Elements} from 'react-stripe-elements';
import InjectedCheckoutForm from './CheckoutForm';

const PaymentDetailsForm = ({
  createPaymentDetails,
  toggleDonationComplete,
  setCardInput,
  setExpDateInput,
  setCcvInput,
  cardNumber,
  expDate,
  ccv,
  donationAmount,
  firstName,
}) => (
  <div className="payment-details">
    <h2>Set up payment</h2>
    <p>Already have an account?</p>
    <button className="btn" type="button">
      Login
    </button>

    <h3 className="payment-details__heading">Continue donating anonymously</h3>
    <form
      className="payment-details__form"
      onSubmit={(event) => {
        event.preventDefault();
        toggleDonationComplete();
        createPaymentDetails();
      }}
    >
      <p>
        <input
          className="nolabel"
          type="text"
          placeholder="Card number"
          value={cardNumber}
          onChange={event => setCardInput(event.target.value)}
        />
      </p>
      <p>
        <input
          className="nolabel"
          type="date"
          placeholder="Expiry date"
          value={expDate}
          onChange={event => setExpDateInput(event.target.value)}
        />
      </p>
      <p>
        <input
          className="nolabel"
          type="text"
          placeholder="CCV"
          value={ccv}
          onChange={event => setCcvInput(event.target.value)}
        />
      </p>
      <button className="btn btn__primary btn__submit" type="submit">
        {`Donate £${donationAmount} to ${firstName}`}
      </button>
    </form>
      <Elements>
        <InjectedCheckoutForm />
      </Elements>
  </div>
);

PaymentDetailsForm.propTypes = {
  createPaymentDetails: PropTypes.func.isRequired,
  toggleDonationComplete: PropTypes.func.isRequired,
  setCardInput: PropTypes.func.isRequired,
  setExpDateInput: PropTypes.func.isRequired,
  setCcvInput: PropTypes.func.isRequired,
  cardNumber: PropTypes.string.isRequired,
  expDate: PropTypes.string.isRequired,
  ccv: PropTypes.string.isRequired,
  donationAmount: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
};

export default PaymentDetailsForm;
