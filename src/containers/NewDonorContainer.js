import { connect } from 'react-redux';
import NewDonor from '../components/NewDonor';
import { addDonor, setNewDonorId } from '../actions';

const mapStateToProps = state => (
  {
    newDonorID: state.donor.newDonorID,
  }
);

const mapDispatchToProps = {
  addDonor,
  setNewDonorId,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewDonor);
