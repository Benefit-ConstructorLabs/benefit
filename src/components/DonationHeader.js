import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/donation-header.scss';

const DonationHeader = ({ firstName, match }) => (
  <div className="donation">
    <h2 className="donation__headline">Cashless donations that make a difference to Recipient {match.params.id}</h2>
    <p className="donation__strapline">Quick. Secure. Cashless.</p>
    <ol className="donation__steps">
      <li className="donation__step">Decide how much you would like to donate to {firstName}.</li>
      <li className="donation__step">Set your payment amount.</li>
      <li className="donation__step"> Help {firstName} out.</li>
    </ol>
  </div>
);

DonationHeader.propTypes = {
  firstName: PropTypes.string.isRequired,
};

export default DonationHeader;
