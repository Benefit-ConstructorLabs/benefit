import React from 'react';
import PropTypes from 'prop-types';
import DonationHeader from '../../src/components/DonationHeader';
import DonationForm from '../../src/components/DonationForm';
import RecipientProfileContainer from '../containers/RecipientProfileContainer';
import DonationPayment from './DonationPayment';

class NewDonation extends React.Component {
  componentDidMount() {
    const { setRecipientFromDB } = this.props;
    const { match } = this.props;
    fetch(`/api/recipient/${match.params.id}`)
      .then(response => response.json())
      .then(recipient => (setRecipientFromDB(recipient)))
      .catch(error => (console.log('FETCH ERROR', error.message)));
  }

  render() {
    const { match, showPaymentDetails, togglePaymentDetails, firstName, donationAmount, setDonationAmount, photo } = this.props;
    // const togglePaymentDetails = false;
    return (
      <React.Fragment>
        {!showPaymentDetails
          && (
            <React.Fragment>
              <DonationHeader match={match} firstName={firstName} />
              <DonationForm donationAmount={donationAmount} setDonationAmount={setDonationAmount} firstName={firstName} photo={photo} togglePaymentDetails={togglePaymentDetails} />
              <RecipientProfileContainer />
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
  setRecipientFromDB: PropTypes.func.isRequired,
  showPaymentDetails: PropTypes.bool.isRequired,
  firstName: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  togglePaymentDetails: PropTypes.func.isRequired,
  donationAmount: PropTypes.number.isRequired,
  setDonationAmount: PropTypes.func.isRequired,
};

export default NewDonation;
