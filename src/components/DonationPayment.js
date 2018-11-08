import React from 'react';
import PaymentDetailsForm from './PaymentDetailsForm';
import PaymentAcknowledgeContainer from '../containers/PaymentAcknowlegeContainer';

const DonationPayment = () => (
  <React.Fragment>
    <h2>Donation Payment</h2>
    <PaymentDetailsForm />
    <PaymentAcknowledgeContainer />
  </React.Fragment>
);

export default DonationPayment;
