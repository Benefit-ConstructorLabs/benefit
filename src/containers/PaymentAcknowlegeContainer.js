import { connect } from 'react-redux';
import PaymentAcknowledge from '../components/PaymentAcknowledge';
import { handleSignUp } from '../actions';

const mapStateToProps = state => ({ recipientName: state.donation.recipientName });

const mapDispatchToProps = { handleSignUp };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PaymentAcknowledge);
