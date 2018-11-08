import { connect } from 'react-redux';
import S3Upload from '../components/S3Upload';
import { setRecipientPhotoUrl } from '../actions';

const mapStateToProps = state => (
  { recipientPhotoUrl: state.recipientPhotoUrl.url }
);

const mapDispatchToProps = {
  setRecipientPhotoUrl,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(S3Upload);
