import { connect } from 'react-redux';
import Recipient from '../components/Recipient';
import { getProfileDetailsByID } from '../actions';

export const mapStateToProps = state => (
  {
    donations: state.recipient.donations,
    profile: {
      photo: state.recipient.photo,
      firstName: state.recipient.firstName,
      lastName: state.recipient.lastName,
      username: state.recipient.username,
      tel: state.recipient.tel,
      bio: state.recipient.bio,
    },
  }
);

const mapDispatchToProps = {
  getProfileDetailsByID,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Recipient);
