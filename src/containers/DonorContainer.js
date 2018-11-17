import { connect } from 'react-redux';
import Donor from '../components/Donor';
import { getDonorDetailsByID } from '../actions';

export const mapStateToProps = state => (
  {
    donations: state.donor.donations,
    profile: {
      photo: state.donor.photo,
      firstName: state.donor.firstName,
      lastName: state.donor.lastName,
      username: state.donor.username,
      tel: state.donor.tel,
    },
  }
);

const mapDispatchToProps = {
  getDonorDetailsByID,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Donor);
