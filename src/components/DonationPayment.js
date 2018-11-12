import React from 'react';

import PaymentDetailsFormContainer from '../containers/PaymentDetailsFormContainer';
import PaymentAcknowledgeContainer from '../containers/PaymentAcknowlegeContainer';

const DonationPayment = ({ donationComplete }) => (
  <React.Fragment>
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
