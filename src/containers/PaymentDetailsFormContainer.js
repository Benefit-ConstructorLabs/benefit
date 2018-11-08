import { connect } from 'react-redux';
import PaymentDetailsForm from '../components/PaymentDetailsForm';
import { createPaymentDetails, setCardInput, setExpDateInput, setCcvInput } from '../actions';

function mapStateToProps(state) {
  return {
    cardNumber: state.cardNumber,
    expDate: state.expDate,
    ccv: state.ccv,
  };
}


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
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PaymentDetailsForm);
