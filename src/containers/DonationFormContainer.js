import { connect } from 'react-redux';
import DonationForm from '../components/DonationForm';
import { setDonationAmount } from '../actions';

const mapStateToProps = state => (
  {
    donationAmount: state.donation.donationAmount,
    firstName: state.recipient.firstName,
    photo: state.recipient.photo,
  }
);

const mapDispatchToProps = {
  setDonationAmount,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DonationForm);
