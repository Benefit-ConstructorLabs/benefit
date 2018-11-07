import React from 'react';
import DonationHeaderContainer from '../containers/DonationHeaderContainer';
import DonationFormContainer from '../containers/DonationFormContainer';
import RecipientProfile from './RecipientProfile';
import DonationPayment from './DonationPayment';

const NewDonation = () => (
  <React.Fragment>
    <DonationHeaderContainer />
    <DonationFormContainer />
    <RecipientProfile />
    <DonationPayment />
  </React.Fragment>
);

export default NewDonation;
