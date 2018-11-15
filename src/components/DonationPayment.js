import React from 'react';

import { Elements } from 'react-stripe-elements';
import PaymentDetailsFormContainer from '../containers/PaymentDetailsFormContainer';
import PaymentAcknowledgeContainer from '../containers/PaymentAcknowlegeContainer';

const DonationPayment = ({ donationComplete }) => (
  <React.Fragment>
    {!donationComplete && (
      <Elements>
        <PaymentDetailsFormContainer />
      </Elements>
    )}
    {donationComplete && <PaymentAcknowledgeContainer />}
  </React.Fragment>
);

export default DonationPayment;
