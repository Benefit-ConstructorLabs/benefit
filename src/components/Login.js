import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/login.scss';

const Login = ({ username, password, login, setLoginDetails, classes }) => {
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
};

export default Login;

Login.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  login: PropTypes.func.isRequired,
  setLoginDetails: PropTypes.func.isRequired,
  classes: PropTypes.string.isRequired,
};

Login.defaultProps = {
  username: '',
  password: '',
};
