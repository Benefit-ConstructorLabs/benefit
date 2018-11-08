import { connect } from 'react-redux';
import NewDonation from '../components/NewDonation';
import { setRecipientFromDB, setDonationAmount, togglePaymentDetails } from '../actions';

export const mapStateToProps = state => ({
  donationAmount: state.donation.donationAmount,
  showPaymentDetails: state.view.showPaymentDetails,
  firstName: state.recipient.firstName,
  photo: state.recipient.photo,
});

const mapDispatchToProps = {
  setRecipientFromDB,
  setDonationAmount,
  togglePaymentDetails,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewDonation);
