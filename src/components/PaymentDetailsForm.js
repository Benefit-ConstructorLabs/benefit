import React from 'react';
import '../../styles/components/payment-details-form.scss';

const PaymentDetailsForm = () => (
  <div className="payment-details-form">
    <h3>Set up payment</h3>
    <form className="payment-details-form__form">
      <input type="text" placeholder="Card number" />
      <input type="text" placeholder="Expiry date" />
      <input type="text" placeholder="CCV" />
      <p>Set up a donor account?</p>
      <p>Continue donating anonymously:</p>
      <button type="button">Donate -Price- to -First Name-</button>
    </form>
  </div>
);

export default PaymentDetailsForm;
