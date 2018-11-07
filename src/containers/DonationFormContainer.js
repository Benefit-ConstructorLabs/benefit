import { connect } from 'react-redux';
import DonationForm from '../components/DonationForm';
import { setDonationAmount } from '../actions';


const mapStateToProps = state => (
  { donationAmount: state.donation.donationAmount }
);

const mapDispatchToProps = {
  setDonationAmount,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DonationForm);
