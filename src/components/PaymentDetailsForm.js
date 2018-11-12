import React from 'react';
import '../../styles/components/payment-details-form.scss';

const PaymentDetailsForm = ({ createPaymentDetails, toggleDonationComplete, setCardInput, setExpDateInput, setCcvInput, cardNumber, expDate, ccv, donationAmount, firstName }) => {
  function handleCardChange(event) {
    setCardInput(event.target.value);
  }
  function handleExpDateChange(event) {
    setExpDateInput(event.target.value);
  }
  function handleCcvChange(event) {
    setCcvInput(event.target.value);
  }

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
            onChange={event => handleCardChange(event)}
          />
        </p>
        <p>
          <input
            className="nolabel"
            type="date"
            placeholder="Expiry date"
            value={expDate}
            onChange={event => handleExpDateChange(event)}
          />
        </p>
        <p>
          <input
            className="nolabel"
            type="text"
            placeholder="CCV"
            value={ccv}
            onChange={event => handleCcvChange(event)}
          />
        </p>
        <button className="btn btn__primary btn__submit" type="submit">{`Donate £${donationAmount} to ${firstName}`}</button>
      </form>
    </div>
  );
};

export default PaymentDetailsForm;
