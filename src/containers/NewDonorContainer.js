import { connect } from 'react-redux';
import NewDonor from '../components/NewDonor';

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(NewDonor);
