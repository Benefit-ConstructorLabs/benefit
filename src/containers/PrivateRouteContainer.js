import { connect } from 'react-redux';
import PrivateRoute from '../components/PrivateRoute';

export const mapStateToProps = state => ({
  isLoggedIn: state.login.isLoggedIn,
});

export default connect(mapStateToProps)(PrivateRoute);
