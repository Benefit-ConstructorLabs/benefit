import React from 'react';
import DonationHeader from './DonationHeader';
import DonationForm from './DonationForm';
import RecipientProfile from './RecipientProfile';
import DonationPayment from './DonationPayment';

const NewDonation = () => {
  return (
    <React.Fragment>
      <DonationHeader />
      <DonationForm />
      <RecipientProfile />
      <DonationPayment />
    </React.Fragment>
  )
};

export default NewDonation;