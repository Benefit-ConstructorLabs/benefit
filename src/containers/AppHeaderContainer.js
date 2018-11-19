import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import { logout, setDropdown } from '../actions';

export const mapStateToProps = state => ({
  isLoggedIn: state.login.isLoggedIn,
  name: state.login.name,
  userID: state.login.userId,
  userType: state.login.userType,
  dropdown: state.login.dropdown,
});

const mapDispatchToProps = {
  logout,
  setDropdown,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AppHeader),
);
