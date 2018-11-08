import { connect } from 'react-redux';
import NewRecipient from '../components/NewRecipient';

const mapStateToProps = state => ({
  recipientID: state.recipient.recipientID,
  firstName: state.recipient.firstName,
  lastName: state.recipient.lastName,
  tel: state.recipient.tel,
  userName: state.recipient.userName,
  password: state.recipient.password,
  photo: state.recipient.photo,
  firstFact: state.recipient.firstFact,
  secondFact: state.recipient.secondFact,
  thirdFact: state.recipient.thirdFact,
});

export default connect(mapStateToProps)(NewRecipient);
