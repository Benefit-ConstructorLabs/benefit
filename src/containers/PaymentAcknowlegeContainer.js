import { connect } from 'react-redux';
import PaymentAcknowledge from '../components/PaymentAcknowledge';

const mapStateToProps = state => ({
  firstName: state.recipient.firstName,
});

export default connect(mapStateToProps)(PaymentAcknowledge);
