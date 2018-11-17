import { connect } from 'react-redux';
import PaymentAcknowledge from '../components/PaymentAcknowledge';

export const mapStateToProps = state => ({
  firstName: state.recipient.firstName,
});

export default connect(mapStateToProps)(PaymentAcknowledge);
