import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/payment-acknowledge.scss';

const PaymentAcknowledge = ({ recipientName }) => (
  <section className="acknowledgement">
    <p className="acknowledgement__notification">Donation confirmed</p>
    <h2 className="acknowledgement__confirmation">
      All set. Thanks for helping&nbsp;
      {recipientName}
      &nbsp;out!
    </h2>
    <h3 className="acknowledgement__question">Would you like to set up an account?</h3>
    <button
      className="btn acknowlegement__account__btn"
      type="submit"
      onClick={event => event.preventDefault(event)}
    >
      Set up an account
    </button>
  </section>
);

PaymentAcknowledge.propTypes = {
  recipientName: PropTypes.string.isRequired,
};

export default PaymentAcknowledge;
