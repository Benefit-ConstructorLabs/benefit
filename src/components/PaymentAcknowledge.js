import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AnimationWrapper from './AnimationWrapper';
import '../../styles/components/payment-acknowledge.scss';

// TODO recipientName in curlies below, h2 tag
export const PaymentAcknowledge = ({ firstName }) => (
  <section className="acknowledgement">
    <h2 className="acknowledgement__confirmation">
      {`All done.Thanks for helping ${firstName} out!`}
    </h2>
    <h3 className="acknowledgement__account">Would you like to set up an account?</h3>
    <Link className="btn btn__primary" to="/donor">
      Set up an account
    </Link>
  </section>
);

PaymentAcknowledge.propTypes = {
  firstName: PropTypes.string,
};

PaymentAcknowledge.defaultProps = {
  firstName: '',
};

export default AnimationWrapper(PaymentAcknowledge);
