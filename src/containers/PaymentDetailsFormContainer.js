import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PaymentDetailsForm from '../components/PaymentDetailsForm';
import { createPaymentDetails, toggleDonationComplete } from '../actions';

const mapStateToProps = state => ({
  firstName: state.recipient.firstName,
  donationAmount: state.donation.donationAmount,
  isLoggedIn: state.login.isLoggedIn,
  userType: state.login.userType,
});

const mapDispatchToProps = {
  createPaymentDetails,
  toggleDonationComplete,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(PaymentDetailsForm));
