import React from 'react';
import '../../styles/components/payment-details-form.scss';

const PaymentDetailsForm = ({ createPaymentDetails, setCardInput, setExpDateInput, setCcvInput, cardNumber, expDate, ccv}) => {
  function handleCardChange(event){
  }
  function handleExpDateChange(event){
    setExpDateInput(event.target.value)
  }
  function handleCcvChange(event){
    setCcvInput(event.target.value)
  }
  
  return (
    <div className="payment-details-form">
      <h3>Set up payment</h3>
      <form className="payment-details-form__form" onSubmit={(event) => {
        event.preventDefault();
        createPaymentDetails()
      }}>
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
          onChange={handleExpDateChange}
        />
        <input
          type="text"
          placeholder="CCV"
          value={ccv}
          onChange={handleCcvChange}
        />
        <p>Set up a donor account?</p>
        <p>Continue donating anonymously:</p>
        <button type="submit">Donate -Price- to -First Name-</button>
      </form>
    </div>
  )
};

export default PaymentDetailsForm;
