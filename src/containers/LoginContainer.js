import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Login from '../components/Login';
import { login, logout, setLoginDetails, setUserFromPassport, setLogout } from '../actions';

const mapStateToProps = state => ({
  isLoggedIn: state.login.isLoggedIn,
  userID: state.login.userId,
  username: state.login.username,
  userType: state.login.userType,
  password: state.login.password,
});

const mapDispatchToProps = {
  login,
  logout,
  setLoginDetails,
  setUserFromPassport,
  setLogout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Login));
