import React from 'react';
import PaymentDetailsForm from './PaymentDetailsForm';
import PaymentAcknowledge from './PaymentAcknowledge';

const DonationPayment = () => (
  <React.Fragment>
    <h2>Donation Payment</h2>
    <PaymentDetailsForm />
    <PaymentAcknowledge />
  </React.Fragment>
);

export default DonationPayment;
