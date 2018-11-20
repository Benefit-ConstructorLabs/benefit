import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PrivateRoute from '../components/PrivateRoute';

export const mapStateToProps = state => ({
  isLoggedIn: state.login.isLoggedIn,
});

export default withRouter(connect(mapStateToProps)(PrivateRoute));
