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
    if (!wasLoggedIn && isNowLoggedIn) {
      let redirectTo = `/${userType}/${userID}`;

      if (location.state && location.state.from) {
        redirectTo = location.state.from.pathname;
      }

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
    return (
      <header>
        <h1 className="app__title">Benefit</h1>
        <button className="btn btn__login" onClick={this.handleClick} type="submit">
          {!isLoggedIn ? 'Log In' : 'Log Out'}
        </button>
        {!isLoggedIn ? (
          <LoginContainer classes={classes} />
        ) : (
          <div>
            <i className="fas fa-user" />
            {` ${name}`}
          </div>
        )}
      </header>
    );
  }
}

AppHeader.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

export default AppHeader;
