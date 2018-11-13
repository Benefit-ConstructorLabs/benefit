import { connect } from 'react-redux';
import S3Upload from '../components/S3Upload';
import { setRecipientImageUrl, setUploadBlur } from '../actions';

const mapStateToProps = state => (
  {
    recipientImageUrl: state.recipientImage.url,
    uploadBlur: state.recipientImage.uploadBlur,
  }
);

const mapDispatchToProps = {
  setRecipientImageUrl,
  setUploadBlur,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(S3Upload);
