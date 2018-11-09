import React from 'react';
import PropTypes from 'prop-types';
import DonationHeader from './DonationHeader';
import DonationForm from './DonationForm';
import RecipientProfile from './RecipientProfile';
import DonationPayment from './DonationPayment';

class NewDonation extends React.Component {
  componentDidMount() {
    const { getRecipientFromDB } = this.props;
    const { match } = this.props;
    getRecipientFromDB(match.params.id);
  }

  render() {
    const { match, showPaymentDetails,
      togglePaymentDetails, firstName, donationAmount,
      setDonationAmount, photo, bio } = this.props;
    return (
      <React.Fragment>
        {!showPaymentDetails
          && (
            <React.Fragment>
              <DonationHeader match={match} firstName={firstName} />
              <DonationForm
                donationAmount={donationAmount}
                setDonationAmount={setDonationAmount}
                firstName={firstName}
                photo={photo}
                togglePaymentDetails={togglePaymentDetails}
              />
              <RecipientProfile firstName={firstName} bio={bio} />
            </React.Fragment>
          )
        }
        {showPaymentDetails
          && <DonationPayment />
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
};

NewDonation.defaultProps = {
  bio: [],
};

export default NewDonation;
