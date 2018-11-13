import React from 'react';

import PropTypes from 'prop-types';
import RecipientWallet from './RecipientWallet';

class Login extends React.Component {
  componentWillReceiveProps({ isLoggedIn: isNowLoggedIn, userID, type = 'recipient', history }) {
    const { isLoggedIn: wasLoggedIn } = this.props;

    if (!wasLoggedIn && isNowLoggedIn) {
      history.push(`/${type}/${userID}`);
    }
  }

  render() {
    const { username, password, login, setLoginDetails } = this.props;

    function handleChange(event) {
      setLoginDetails(event.target.name, event.target.value);
    }

    return (
      <React.Fragment>
        <form
          className="login"
          onSubmit={(event) => {
            event.preventDefault();
            login();
          }}
        >
          <ul>
            <li>
              <input
                className="nolabel"
                type="text"
                name="username"
                value={username}
                placeholder="Your Username"
                onChange={handleChange}
              />
            </li>
            <li>
              <input
                className="nolabel"
                type="password"
                name="password"
                value={password}
                placeholder="Your Password"
                onChange={handleChange}
              />
            </li>
          </ul>
          <button className="btn btn__login" type="submit">
            Log In
          </button>
        </form>
        {/* <PrivateRoute path="/wallet" component={RecipientWallet} /> */}
      </React.Fragment>
    );
  }
}

export default Login;

Login.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  userID: PropTypes.number,
  type: PropTypes.oneOf([undefined, 'recipient', 'donor']),
  username: PropTypes.string,
  password: PropTypes.string,
  login: PropTypes.func.isRequired,
  setLoginDetails: PropTypes.func.isRequired,
};

Login.defaultProps = {
  username: '',
  password: '',
  userID: 0,
  type: undefined,
};
