import React from 'react';
import PaymentDetailsFormContainer from '../containers/PaymentDetailsFormContainer';
import PaymentAcknowledge from './PaymentAcknowledge';

const DonationPayment = () => (
  <React.Fragment>
    <h2>Donation Payment</h2>
    <PaymentDetailsFormContainer />
    <PaymentAcknowledge />
  </React.Fragment>
);

export default DonationPayment;
