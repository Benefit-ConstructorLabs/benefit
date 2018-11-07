import { connect } from 'react-redux';
import DonationHeader from '../components/DonationHeader';

const mapStateToProps = state => (
  { firstName: state.recipient.firstName }
);

export default connect(
  mapStateToProps
)(DonationHeader);
