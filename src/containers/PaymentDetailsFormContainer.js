import { connect } from 'react-redux';
import PaymentDetailsForm from '../components/PaymentDetailsForm';
import { createPaymentDetails, toggleDonationComplete, setCardInput, setExpDateInput, setCcvInput } from '../actions';

const mapStateToProps = state => (
  {
    cardNumber: state.paymentDetails.cardNumber,
    expDate: state.paymentDetails.expDate,
    ccv: state.paymentDetails.ccv,
    firstName: state.recipient.firstName,
    donationAmount: state.donation.donationAmount,
  }
);

const mapDispatchToProps = {
  setCardInput,
  setExpDateInput,
  setCcvInput,
  createPaymentDetails,
  toggleDonationComplete,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PaymentDetailsForm);
