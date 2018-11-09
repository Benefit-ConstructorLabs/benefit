import React from 'react';
import '../../styles/components/payment-details-form.scss';

const PaymentDetailsForm = ({ createPaymentDetails, toggleDonationComplete, setCardInput, setExpDateInput, setCcvInput, cardNumber, expDate, ccv}) => {
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
    <div className="payment-details-form">
      <h3>Set up payment</h3>
      <p>Already have an account?</p>
      <p>Login</p>

      <p>Continue donating anonymously:</p>
      <form
        className="payment-details-form__form"
        onSubmit={(event) => {
          event.preventDefault();
          toggleDonationComplete();
          createPaymentDetails();
        }}
      >
        <input
          type="text"
          placeholder="Card number"
          value={cardNumber}
          onChange={event => handleCardChange(event)}
        />
        <input
          type="date"
          placeholder="Expiry date"
          value={expDate}
          onChange={event => handleExpDateChange(event)}
        />
        <input
          type="text"
          placeholder="CCV"
          value={ccv}
          onChange={event => handleCcvChange(event)}
        />
        <button type="submit">Donate -Price- to -First Name-</button>
      </form>
    </div>
  );
};

export default PaymentDetailsForm;
