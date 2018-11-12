import React from 'react';
// import PropTypes from 'prop-types';
import Tabs from './Tabs';
import RecipientCode from './RecipientCode';
import RecipientBalance from './RecipientBalance';
import RecipientProfile from './RecipientProfile';

import '../../styles/components/recipient.scss';

const Recipient = match => (
  <Tabs>
    <RecipientCode label="QR Code" routeParams={match} />
    <RecipientBalance label="Balance" />
    {/* <RecipientProfile label="Profile" /> */}
  </Tabs>
);

export default Recipient;
