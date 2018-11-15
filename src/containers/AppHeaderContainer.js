import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import { logout } from '../actions';

const mapStateToProps = state => ({
  isLoggedIn: state.login.isLoggedIn,
  name: state.login.name,
  userID: state.login.userId,
  userType: state.login.userType,
});

const mapDispatchToProps = {
  logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(AppHeader));
