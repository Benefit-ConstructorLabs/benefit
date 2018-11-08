import { connect } from 'react-redux';
import DonationHeader from '../components/DonationHeader';

const mapStateToProps = state => ({ first_name: state.recipient.first_name });

export default connect(mapStateToProps)(DonationHeader);
