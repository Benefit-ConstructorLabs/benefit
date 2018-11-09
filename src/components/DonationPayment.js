import React from 'react';

import PaymentDetailsFormContainer from '../containers/PaymentDetailsFormContainer';
import PaymentAcknowledgeContainer from '../containers/PaymentAcknowlegeContainer';

const DonationPayment = ({ donationComplete }) => (
  <React.Fragment>
    <h2>Donation Payment</h2>
    {!donationComplete
      && (
        <PaymentDetailsFormContainer />
      )
    }
    {donationComplete
      && (
        <PaymentAcknowledgeContainer />
      )
    }
  </React.Fragment>
);

export default DonationPayment;
