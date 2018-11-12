import React from 'react';
import PropTypes from 'prop-types';
import S3UploadContainer from '../containers/S3UploadContainer';

import '../../styles/components/newrecipient.scss';

class NewRecipient extends React.Component {
  componentWillReceiveProps(newProps) {
    const { recipientIdForQrCode, history } = this.props;
    if (newProps.recipientIdForQrCode !== recipientIdForQrCode) {
      const url = `/recipient/${newProps.recipientIdForQrCode}`;
      history.push(url);
    }
  }

  render() {
    const {
      addRecipient,
      setInputField,
      firstName,
      lastName,
      tel,
      username,
      password,
      bio1,
      bio2,
      bio3,
    } = this.props;
    function handleChange(event) {
      setInputField(event.target.name, event.target.value);
    }
    return (
      <div className="newrecipient">
        <h2 className="newrecipient__title">Start taking digital donations in 3 steps</h2>
        <img src="" alt="" className="newrecipient__header-image" />
        <form
          className="newrecipient__form"
          onSubmit={(event) => {
            event.preventDefault();
            addRecipient();
          }}
        >
          <h3 className="newrecipient__form__heading">Add your personal details</h3>
          <ul>
            <li>
              <label htmlFor="firstName">
                First name
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  id="firstName"
                  value={firstName}
                  onChange={event => handleChange(event)}
                />
              </label>
            </li>
            <li>
              <label htmlFor="lastName">
                Last name
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  id="lastName"
                  value={lastName}
                  onChange={event => handleChange(event)}
                />
              </label>
            </li>
            <li>
              <label htmlFor="tel">
                Telephone
                <input
                  type="text"
                  name="tel"
                  placeholder="Telephone number"
                  id="tel"
                  value={tel}
                  onChange={event => handleChange(event)}
                />
              </label>
            </li>
            <li>
              <label htmlFor="username">
                Username
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Choose a username"
                  value={username}
                  onChange={event => handleChange(event)}
                />
              </label>
            </li>
            <li>
              <label htmlFor="passowrd">
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="Enter a password"
                  value={password}
                  onChange={event => handleChange(event)}
                />
              </label>
            </li>
            <li>
              <S3UploadContainer />
            </li>
          </ul>

          <h3 className="newrecipient__form__heading">Tell people three things about yourself</h3>
          <ul>
            <li>
              <input
                className="nolabel"
                type="text"
                name="bio1"
                placeholder="I play..."
                value={bio1}
                onChange={event => handleChange(event)}
              />
            </li>
            <li>
              <input
                className="nolabel"
                type="text"
                name="bio2"
                placeholder="I like..."
                value={bio2}
                onChange={event => handleChange(event)}
              />
            </li>
            <li>
              <input
                className="nolabel"
                type="text"
                name="bio3"
                placeholder="I enjoy..."
                value={bio3}
                onChange={event => handleChange(event)}
              />
            </li>

          </ul>
          <button className="btn btn__primary btn__submit" type="submit">
            Create account
          </button>
        </form>
      </div>
    );
  }
}

NewRecipient.propTypes = {
  addRecipient: PropTypes.func.isRequired,
  setInputField: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string,
  tel: PropTypes.string,
  username: PropTypes.string,
  password: PropTypes.string,
  bio1: PropTypes.string,
  bio2: PropTypes.string,
  bio3: PropTypes.string,
  recipientIdForQrCode: PropTypes.number,
};

NewRecipient.defaultProps = {
  lastName: '',
  tel: '',
  username: '',
  password: '',
  bio1: '',
  bio2: '',
  bio3: '',
  recipientIdForQrCode: null,
};
export default NewRecipient;
