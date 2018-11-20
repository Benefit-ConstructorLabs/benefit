import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PaymentDetailsForm from '../components/PaymentDetailsForm';
import { createPaymentDetails, toggleDonationComplete, setDropdown } from '../actions';

export const mapStateToProps = state => ({
  firstName: state.recipient.firstName,
  donationAmount: state.donation.donationAmount,
  isLoggedIn: state.login.isLoggedIn,
  userType: state.login.userType,
  dropdown: state.login.dropdown,
});

const mapDispatchToProps = {
  createPaymentDetails,
  toggleDonationComplete,
  setDropdown,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(PaymentDetailsForm));
