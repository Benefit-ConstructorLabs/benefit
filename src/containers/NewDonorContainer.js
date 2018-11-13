import { connect } from 'react-redux';
import NewDonor from '../components/NewDonor';
import { addDonor } from '../actions';

const mapStateToProps = state => ({
  firstName: state.donor.firstName,
  lastName: state.donor.lastName,
  tel: state.donor.tel,
  email: state.donor.email,
  password: state.donor.password,
  cardNo: state.donor.cardNo,
  cardExp: state.donor.cardExp,
  cardCCV: state.donor.cardCCV,
});

const mapDispatchToProps = {
  // setDonorInputField,
  addDonor,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewDonor);
