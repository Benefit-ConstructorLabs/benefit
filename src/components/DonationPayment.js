import React from 'react';

import PaymentDetailsFormContainer from '../containers/PaymentDetailsFormContainer';
import PaymentAcknowledgeContainer from '../containers/PaymentAcknowlegeContainer';
import { Elements } from 'react-stripe-elements';

const DonationPayment = ({ donationComplete }) => (
  <React.Fragment>
    {!donationComplete
      && (
        <Elements>
          <PaymentDetailsFormContainer />
        </Elements>
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
