import React from 'react';
import DonationHeaderContainer from '../containers/DonationHeaderContainer';
import DonationFormContainer from '../containers/DonationFormContainer';
import RecipientProfileContainer from '../containers/RecipientProfileContainer';
import DonationPayment from './DonationPayment';

class NewDonation extends React.Component {


  componentDidMount() {
    const { match } = this.props;
    fetch(`/api/recipient/${match.params.id}`)
      .then(response => response.json())
      .then(recipient => {
        this.props.setRecipientFromDB(recipient);
      })
      .catch(error => (console.log('FETCH ERROR', error.message)));
  }

  render() {
    const { match } = this.props;
    return (
      <React.Fragment>
        <DonationHeaderContainer match={match} />
        <DonationFormContainer />
        <RecipientProfileContainer />
        <DonationPayment />
      </React.Fragment>
    );
  }
}

export default NewDonation;
