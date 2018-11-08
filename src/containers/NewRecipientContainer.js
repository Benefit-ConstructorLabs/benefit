import { connect } from 'react-redux';
import NewRecipient from '../components/NewRecipient';
import { submitRecipientForm, setInputField, addRecipient } from '../actions';

const mapStateToProps = state => ({
  first_name: state.recipient.first_name,
  last_name: state.recipient.last_name,
  tel: state.recipient.tel,
  username: state.recipient.username,
  password: state.recipient.password,
  photo: state.recipient.photo,
  bio_1: state.recipient.bio_1,
  bio_2: state.recipient.bio_2,
  bio_3: state.recipient.bio_3,
});

const mapDispatchToProps = {
  setInputField,
  submitRecipientForm,
  addRecipient,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewRecipient);
