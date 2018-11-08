import { connect } from 'react-redux';
import RecipientProfile from '../components/RecipientProfile';

const mapStateToProps = state => (
  {
    firstName: state.recipient.firstName,
    bio: state.recipient.bio,
  }
);

export default connect(
  mapStateToProps,
)(RecipientProfile);
