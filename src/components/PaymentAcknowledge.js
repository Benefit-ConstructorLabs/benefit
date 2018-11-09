import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/payment-acknowledge.scss';

// TODO recipientName in curlies below, h2 tag
const PaymentAcknowledge = () => (
  <section className="acknowledgement">
    <p className="acknowledgement__notification">Donation confirmed</p>
    <h2 className="acknowledgement__confirmation">
      All set. Thanks for helping&nbsp; Jeff &nbsp;out!
    </h2>
    <h3 className="acknowledgement__question">Would you like to set up an account?</h3>
    <Link to="/donor">Set up an account</Link>
  </section>
);

export default PaymentAcknowledge;
