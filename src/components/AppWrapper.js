import React from 'react';
import PropTypes from 'prop-types';
import App from './App';

class AppWrapper extends React.Component {
  componentDidMount() {
    const { checkLogin } = this.props;
    checkLogin();
  }

  render() {
    const { hasCheckedUser } = this.props;
    return hasCheckedUser ? <App /> : <div>Loading...</div>;
  }
}

AppWrapper.propTypes = {
  checkLogin: PropTypes.func.isRequired,
  hasCheckedUser: PropTypes.bool.isRequired,
};
export default AppWrapper;
