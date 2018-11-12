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

function mapDispatchToProps(dispatch) {
  return {
    setCardInput: (cardInput) => {
      dispatch(setCardInput(cardInput));
    },
    setExpDateInput: (expDateInput) => {
      dispatch(setExpDateInput(expDateInput));
    },
    setCcvInput: (ccvInput) => {
      dispatch(setCcvInput(ccvInput));
    },
    createPaymentDetails: (paymentDetails) => {
      dispatch(createPaymentDetails(paymentDetails));
    },
    toggleDonationComplete: () => {
      dispatch(toggleDonationComplete());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PaymentDetailsForm);
