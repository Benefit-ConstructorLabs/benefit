import { connect } from 'react-redux';
import DonorSignUp from '../components/DonorSignUp';

const mapStateToProps = state => ({ showSignUp: state.donor.showSignUp });

export default connect(mapStateToProps)(DonorSignUp);
