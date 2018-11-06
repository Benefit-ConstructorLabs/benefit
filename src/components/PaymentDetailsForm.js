import React from 'react';

const PaymentDetailsForm = () => {
  return (
    <div className="payment-details-form">
      <h3>Set up payment</h3>
      <form className="payment-details-form__form" onSubmit={}>
        <input type="text" placeholder="Card number" onChange={}/>
        <input type="text" placeholder="Expiry date" onChange={}/>
        <input type="text" placeholder="CCV" onChange={}/>
        <p>Set up a donor account?</p>
        <p>Continue donating anonymously:</p>
        <button>Donate -Price- to -First Name-</button>
      </form>
    </div>
  )
};

export default PaymentDetailsForm;
