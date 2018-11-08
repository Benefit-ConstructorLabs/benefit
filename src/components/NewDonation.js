import React from 'react';
import DonationHeaderContainer from '../containers/DonationHeaderContainer';
import DonationFormContainer from '../containers/DonationFormContainer';
import RecipientProfileContainer from '../containers/RecipientProfileContainer';
import DonationPayment from './DonationPayment';

const NewDonation = () => (
  <React.Fragment>
    <DonationHeaderContainer />
    <DonationFormContainer />
    <RecipientProfileContainer />
    <DonationPayment />
  </React.Fragment>
);

export default NewDonation;
