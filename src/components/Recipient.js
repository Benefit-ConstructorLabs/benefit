import React from 'react';
import RecipientCode from './RecipientCode';
import RecipientBalance from './RecipientBalance';
import RecipientProfile from './RecipientProfile';

const Recipient = ({ match }) => (
  <React.Fragment>
    <RecipientCode match={match} />
    <RecipientBalance />
    <RecipientProfile />
  </React.Fragment>
);

export default Recipient;
