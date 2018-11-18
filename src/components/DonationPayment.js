import React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import PaymentDetailsFormContainer from '../containers/PaymentDetailsFormContainer';
import PaymentAcknowledgeContainer from '../containers/PaymentAcknowlegeContainer';

const DonationPayment = ({ donationComplete }) => (
  <StripeProvider apiKey="pk_test_fy9Zps4yuxSNHtPrVr5vr02d">
    <React.Fragment>
      {!donationComplete && (
        <Elements>
          <PaymentDetailsFormContainer />
        </Elements>
      )}
      {donationComplete && <PaymentAcknowledgeContainer />}
    </React.Fragment>
  </StripeProvider>
);

export default DonationPayment;
