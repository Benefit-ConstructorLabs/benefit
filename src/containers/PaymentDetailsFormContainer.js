import { connect } from 'react-redux';
import PaymentDetailsForm from '../components/PaymentDetailsForm';
import { createPaymentDetails, toggleDonationComplete } from '../actions';

const mapStateToProps = state => (
  {
    firstName: state.recipient.firstName,
    donationAmount: state.donation.donationAmount,
  }
);

const mapDispatchToProps = {
  createPaymentDetails,
  toggleDonationComplete,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PaymentDetailsForm);
