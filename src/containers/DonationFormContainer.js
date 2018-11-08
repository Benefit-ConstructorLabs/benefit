import { connect } from 'react-redux';
import DonationForm from '../components/DonationForm';
import { setDonationAmount, togglePaymentDetails } from '../actions';

const mapStateToProps = state => (
  {
    donationAmount: state.donation.donationAmount,
    firstName: state.recipient.firstName,
    photo: state.recipient.photo,
  }
);

const mapDispatchToProps = {
  setDonationAmount,
  togglePaymentDetails,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DonationForm);
