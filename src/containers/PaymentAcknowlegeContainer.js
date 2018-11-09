import { connect } from 'react-redux';
import PaymentAcknowledge from '../components/PaymentAcknowledge';

const mapStateToProps = state => ({ recipientName: state.donation.recipientName });

export default connect(mapStateToProps)(PaymentAcknowledge);
