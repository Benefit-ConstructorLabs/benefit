import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/login.scss';

class Login extends React.Component {
  render() {
    const { username, password, login, setLoginDetails, classes } = this.props;

    function handleChange(event) {
      setLoginDetails(event.target.name, event.target.value);
    }

    return (
      <React.Fragment>
        <form
          className={classes}
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
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;

Login.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  userID: PropTypes.number,
  userType: PropTypes.oneOf([undefined, 'recipient', 'donor']),
  username: PropTypes.string,
  password: PropTypes.string,
  login: PropTypes.func.isRequired,
  setLoginDetails: PropTypes.func.isRequired,
};

Login.defaultProps = {
  username: '',
  password: '',
  userID: 0,
  userType: undefined,
};
