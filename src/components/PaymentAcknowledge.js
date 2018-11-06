import React from 'react';

const PaymentAcknowledge = () => {
  return (
    <section className='acknowledgement' >
      <p className='acknowledgement__notification'>Donation confirmed</p>
      <h2 className='acknowledgement__confirmation'>All set. Thanks for helping "FirstName" out!</h2>
      <h3 className='acknowledgement__question'>Want to save your details for another donation?</h3>
      <button className='acknowledgement__account' onClick={event=>event.preventDefault()}>Set up donor account</button>
    </section>
  )
};

export default PaymentAcknowledge;