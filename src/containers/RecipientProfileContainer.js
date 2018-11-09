import { connect } from 'react-redux';
import RecipientProfile from '../components/RecipientProfile';

export const mapStateToProps = state => (
  {
    firstName: state.recipient.firstName,
    bio: state.recipient.bio,
  }
);

export default connect(
  mapStateToProps,
)(RecipientProfile);
