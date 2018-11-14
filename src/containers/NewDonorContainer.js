import { connect } from 'react-redux';
import NewDonorWrapper from '../components/NewDonorWrapper';
import { addDonor, setNewDonorId } from '../actions';

const mapStateToProps = state => (
  {
    newDonorId: state.donor.newDonorId,
  }
);

const mapDispatchToProps = {
  addDonor,
  setNewDonorId,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewDonorWrapper);
