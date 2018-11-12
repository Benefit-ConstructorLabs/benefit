import { connect } from 'react-redux';
import Recipient from '../components/Recipient';

export const mapStateToProps = state => (
  {
    firstName: state.recipient.firstName,
    bio: state.recipient.bio,
  }
);

export default connect(
  mapStateToProps,
)(Recipient);
