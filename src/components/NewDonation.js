import React from 'react';
import DonationHeader from './DonationHeader';
import DonationFormContainer from '../containers/DonationFormContainer';
import RecipientProfile from './RecipientProfile';
import DonationPayment from './DonationPayment';

const NewDonation = () => (
  <React.Fragment>
    <DonationHeader />
    <DonationFormContainer />
    <RecipientProfile />
    <DonationPayment />
  </React.Fragment>
);

export default NewDonation;
