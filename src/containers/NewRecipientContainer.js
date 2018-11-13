import { connect } from 'react-redux';
import NewRecipient from '../components/NewRecipient';
import { setInputField, addRecipient } from '../actions';

const mapStateToProps = state => ({
  firstName: state.recipient.firstName,
  lastName: state.recipient.lastName,
  tel: state.recipient.tel,
  username: state.recipient.username,
  password: state.recipient.password,
  photo: state.recipient.photo,
  bio1: state.recipient.bio1,
  bio2: state.recipient.bio2,
  bio3: state.recipient.bio3,
  recipientIdForQrCode: state.recipient.recipientIdForQrCode,
  recipientImageUrl: state.recipientImage.url,
  uploadBlur: state.recipientImage.uploadBlur,
});

const mapDispatchToProps = {
  setInputField,
  addRecipient,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewRecipient);
