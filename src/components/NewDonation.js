import React from 'react';
import PropTypes from 'prop-types';
import DonationHeaderContainer from '../containers/DonationHeaderContainer';
import DonationFormContainer from '../containers/DonationFormContainer';
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
    const { match, togglePaymentDetails } = this.props;
    // const togglePaymentDetails = false;
    return (
      <React.Fragment>
        {!togglePaymentDetails
          && (
            <React.Fragment>
              <DonationHeaderContainer match={match} />
              <DonationFormContainer />
              <RecipientProfileContainer />
            </React.Fragment>
          )
        }
        {togglePaymentDetails
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
  togglePaymentDetails: PropTypes.func.isRequired,
};

export default NewDonation;
