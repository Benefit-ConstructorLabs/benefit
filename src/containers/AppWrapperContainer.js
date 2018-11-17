import { connect } from 'react-redux';
import AppWrapper from '../components/AppWrapper';
import { checkLogin } from '../actions';

export const mapStateToProps = state => ({
  hasCheckedUser: state.login.hasCheckedUser,
});

const mapDispatchToProps = {
  checkLogin,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppWrapper);
