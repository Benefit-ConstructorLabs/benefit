import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/donation-header.scss';

const DonationHeader = ({ firstName }) => (
  <React.Fragment>
    <h2 className="donation__headline">Cashless donations that make a difference.</h2>
    <h3 className="donation__strapline">Quick. Secure. Cashless.</h3>
    <ol className="donation__steps">
      <li className="donation__step">
        {`Decide how much you would like to donate to ${firstName}.`}
      </li>
      <li className="donation__step">Set your payment amount.</li>
      <li className="donation__step">
        {`Help ${firstName} out.`}
      </li>
    </ol>
  </React.Fragment>
);

DonationHeader.propTypes = {
  firstName: PropTypes.string.isRequired,
};

export default DonationHeader;
