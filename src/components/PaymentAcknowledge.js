import React from 'react';

const PaymentAcknowledge = () => {
  return (
    <React.Fragment>
      <p>Donation confirmed</p>
      <h2>All set. Thanks for helping "FirstName" out!</h2>
      <h3>Want to save your details for another donation?</h3>
      <button onClick={event=>event.preventDefault()}>Set up donor account</button>
    </React.Fragment>
  )
};

export default PaymentAcknowledge;