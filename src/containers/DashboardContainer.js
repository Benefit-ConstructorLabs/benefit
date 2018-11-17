import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import { getDonationsByOrganisationID } from '../actions'

export const mapStateToProps = state => (
  {
    id: state.organisation.id,
    donations: state.organisation.donations,
  }
);

const mapDispatchToProps = {
  getDonationsByOrganisationID,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
