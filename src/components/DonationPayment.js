import React from 'react';

import PaymentDetailsFormContainer from '../containers/PaymentDetailsFormContainer';
import PaymentAcknowledgeContainer from '../containers/PaymentAcknowlegeContainer';


const DonationPayment = () => (
  <React.Fragment>
    <h2>Donation Payment</h2>
    <PaymentDetailsFormContainer />
    <PaymentAcknowledgeContainer />
  </React.Fragment>
);

export default DonationPayment;
