import React from 'react';
import '../../styles/components/app-header.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';
import LoginContainer from '../containers/LoginContainer';

class AppHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      dropdown: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps({ isLoggedIn: isNowLoggedIn, userID, userType, location, history }) {
    const { isLoggedIn: wasLoggedIn } = this.props;
    let redirectTo = '';
    if (!wasLoggedIn && isNowLoggedIn) {
      redirectTo = `/${userType}/${userID}`;
      if (location.state && location.state.from) {
        redirectTo = location.state.from.pathname;
      }
      history.push(redirectTo);
    } else if (wasLoggedIn && isNowLoggedIn) {
      redirectTo = `/${userType}/${userID}`;
      history.push(redirectTo);
    } else {
      redirectTo = '/login';
      history.push(redirectTo);
    }
  }

  handleClick(event) {
    const { dropdown } = this.state;
    const { isLoggedIn, logout } = this.props;
    event.preventDefault();
    this.setState({
      dropdown: !dropdown,
    });
    if (isLoggedIn) {
      logout();
    }
  }

  render() {
    const { dropdown } = this.state;
    const { isLoggedIn, name } = this.props;
    const classes = cx('dropdown', {
      'dropdown--open': dropdown,
    });
    const loginMessage = isLoggedIn ? 'Log Out' : 'Log In';
    const loginClass = isLoggedIn ? 'fas active fa-inverse fa-1x fa-user-circle' : 'fas inactive fa-inverse fa-1x fa-user-circle';
    return (
      <header className="app__header">
        {/* <h1 className="app__title">Better Change</h1> */}
        <img className="logo" src="../../static/assets/images/better-change-logo.png" alt="logo" />
        {!isLoggedIn ? (
          <LoginContainer classes={classes} />
        ) : (
          <div>
            {/* <i className="fas fa-1x fa-user-circle" /> */}
            {` ${name}`}
          </div>
        )}
        <a href="#" className="login__text" onClick={this.handleClick}>
          {loginMessage}
          {<i className={loginClass} />}
        </a>
      </header>
    );
  }
}

AppHeader.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
  userID: PropTypes.number,
  userType: PropTypes.string,
  location: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

AppHeader.defaultProps = {
  userID: null,
  userType: '',
};

export default AppHeader;
