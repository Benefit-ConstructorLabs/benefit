import React from 'react';
import PropTypes from 'prop-types';
import DonorSignUpContainer from '../containers/DonorSignUpContainer';
import '../../styles/components/payment-acknowledge.scss';

// TODO recipientName in curlies below, h2 tag
const PaymentAcknowledge = ({ handleSignUp }) => (
  <section className="acknowledgement">
    <p className="acknowledgement__notification">Donation confirmed</p>
    <h2 className="acknowledgement__confirmation">
      All set. Thanks for helping&nbsp; Jeff &nbsp;out!
    </h2>
    <h3 className="acknowledgement__question">Would you like to set up an account?</h3>
    <button
      className="btn acknowlegement__account__btn"
      type="submit"
      onClick={(event) => {
        event.preventDefault(event);
        handleSignUp();
      }}
    >
      Set up an account
    </button>
    <DonorSignUpContainer />
  </section>
);

PaymentAcknowledge.propTypes = {
  // recipientName: PropTypes.string.isRequired,
  handleSignUp: PropTypes.func.isRequired,
};

export default PaymentAcknowledge;
