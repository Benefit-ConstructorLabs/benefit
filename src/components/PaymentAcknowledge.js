import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/payment-acknowledge.scss';

// TODO recipientName in curlies below, h2 tag
const PaymentAcknowledge = ({ firstName }) => (
  <section className="acknowledgement">
    <h2 className="acknowledgement__confirmation">
      {`All done.Thanks for helping ${firstName} out!`}
    </h2>
    <h3 className="acknowledgement__account">Would you like to set up an account?</h3>
    <Link className="btn btn__primary" to="/donor">Set up an account</Link>
  </section>
);

export default PaymentAcknowledge;
