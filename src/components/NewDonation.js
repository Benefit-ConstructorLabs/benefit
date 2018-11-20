import React from 'react';
import PropTypes from 'prop-types';
import DonationHeader from './DonationHeader';
import DonationForm from './DonationForm';
import RecipientInterests from './RecipientInterests';
import DonationPayment from './DonationPayment';

import '../../styles/components/donation.scss';

class NewDonation extends React.Component {
  componentDidMount() {
    const { getRecipientFromDB } = this.props;
    const { match } = this.props;
    getRecipientFromDB(match.params.id);
  }

  render() {
    const { match, showPaymentDetails,
      togglePaymentDetails, firstName, donationAmount,
      setDonationAmount, photo, bio, donationComplete, reason } = this.props;
    return (
      <React.Fragment>
        {!showPaymentDetails
          && (
            <div className="donation">
              <DonationHeader match={match} firstName={firstName} />
              <DonationForm
                donationAmount={donationAmount}
                setDonationAmount={setDonationAmount}
                firstName={firstName}
                photo={photo}
                togglePaymentDetails={togglePaymentDetails}
                reason={reason}
              />
              <RecipientInterests firstName={firstName} bio={bio} />
            </div>
          )
        }
        {showPaymentDetails
          && <DonationPayment donationComplete={donationComplete} />
        }
      </React.Fragment>
    );
  }
}

NewDonation.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({ id: PropTypes.string }),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  getRecipientFromDB: PropTypes.func.isRequired,
  showPaymentDetails: PropTypes.bool.isRequired,
  firstName: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  bio: PropTypes.arrayOf(PropTypes.string),
  togglePaymentDetails: PropTypes.func.isRequired,
  donationAmount: PropTypes.number.isRequired,
  setDonationAmount: PropTypes.func.isRequired,
  donationComplete: PropTypes.bool.isRequired,
  reason: PropTypes.string.isRequired,
};

NewDonation.defaultProps = {
  bio: [],
};

export default NewDonation;
