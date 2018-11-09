import { connect } from 'react-redux';
import NewDonation from '../components/NewDonation';
import { getRecipientFromDB, setDonationAmount, togglePaymentDetails } from '../actions';

export const mapStateToProps = state => ({
  donationAmount: state.donation.donationAmount,
  showPaymentDetails: state.view.showPaymentDetails,
  firstName: state.recipient.firstName,
  photo: state.recipient.photo,
  bio: state.recipient.bio,
  donationComplete: state.view.donationComplete,
});

const mapDispatchToProps = {
  getRecipientFromDB,
  setDonationAmount,
  togglePaymentDetails,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewDonation);
