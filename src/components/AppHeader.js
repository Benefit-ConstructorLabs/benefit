import React from 'react';
import '../../styles/components/app-header.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';
import LoginContainer from '../containers/LoginContainer';

class AppHeader extends React.Component {
  constructor() {
    super();

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
    } else if (wasLoggedIn && isNowLoggedIn) {
      redirectTo = `/${userType}/${userID}`;
    }
    if (redirectTo) {
      history.push(redirectTo);
    }
  }

  handleClick(event) {
    const { dropdown, setDropdown, isLoggedIn, logout } = this.props;
    event.preventDefault();
    setDropdown(dropdown);
    if (isLoggedIn) {
      logout();
    }
  }

  render() {
    const { dropdown, isLoggedIn, location } = this.props;
    const classes = cx('dropdown', {
      'dropdown--open': dropdown || location.pathname === '/login',
    });
    const loginMessage = isLoggedIn ? 'Log Out' : 'Log In';
    const loginClass = isLoggedIn
      ? 'fas active fa-inverse fa-1x fa-user-circle'
      : 'fas inactive fa-inverse fa-1x fa-user-circle';
    return (
      <header className="app__header">
        <h1 className="app__title">
          <a href="/">+ Better Change</a>
        </h1>
        {!isLoggedIn && <LoginContainer classes={classes} />}
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
  dropdown: PropTypes.bool.isRequired,
  setDropdown: PropTypes.func.isRequired,
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
