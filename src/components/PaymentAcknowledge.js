import React from 'react';
import '../../styles/components/payment-acknowledge.scss';

const PaymentAcknowledge = () => (
  <section className="acknowledgement">
    <p className="acknowledgement__notification">Donation confirmed</p>
    <h2 className="acknowledgement__confirmation">All set. Thanks for helping &ldquo; FirstName&rdquo; out!</h2>
    <h3 className="acknowledgement__question">Want to save your details for another donation?</h3>
    <button type="button" className="btn acknowledgement__account__btn" onClick={event => event.preventDefault()}>Set up donor account</button>
  </section>
);

export default PaymentAcknowledge;
