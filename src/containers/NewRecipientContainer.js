import { connect } from 'react-redux';
import NewRecipient from '../components/NewRecipient';
import { addRecipient, setRecipientIdForQrCode } from '../actions';

export const mapStateToProps = state => ({
  firstName: state.recipient.firstName,
  lastName: state.recipient.lastName,
  tel: state.recipient.tel,
  username: state.recipient.username,
  password: state.recipient.password,
  photo: state.recipient.photo,
  reason: state.recipient.reason,
  bio1: state.recipient.bio1,
  bio2: state.recipient.bio2,
  bio3: state.recipient.bio3,
  recipientIdForQrCode: state.recipient.recipientIdForQrCode,
});

const mapDispatchToProps = {
  addRecipient,
  setRecipientIdForQrCode,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewRecipient);
