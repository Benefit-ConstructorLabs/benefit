import React from 'react';
import PropTypes from 'prop-types';
import S3UploadContainer from '../containers/S3UploadContainer';
import RecipientSignUpForm from './RecipientSignUpForm';

import '../../styles/components/newrecipient.scss';

class NewRecipient extends React.Component {
  componentWillReceiveProps(newProps) {
    if (newProps.recipientIdForQrCode !== this.props.recipientIdForQrCode) {
      const url = `/recipient/${newProps.recipientIdForQrCode}`
      this.props.history.push(url);
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
      photo,
      bio1,
      bio2,
      bio3
    } = this.props;
    function handleChange(event) {
      setInputField(event.target.name, event.target.value);
    }
    return (
      <React.Fragment>
        <h2>New Recipient</h2>
        <h2 className="newrecipient__title">Start taking digital donations in 3 steps</h2>
        <img src="" alt="" className="newrecipient__header-image" />
        <form
          className="newrecipient__form"
          onSubmit={event => {
            event.preventDefault();
            addRecipient();
          }}
        >
          <h2>Add your basic information</h2>
          <ul>
            <li>
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={firstName}
                onChange={event => handleChange(event)}
              />
            </li>
            <li>
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={lastName}
                onChange={event => handleChange(event)}
              />
            </li>
            <li>
              <input
                type="text"
                name="tel"
                placeholder="Telephone number"
                value={tel}
                onChange={event => handleChange(event)}
              />
            </li>
            <li>
              <input
                type="text"
                name="username"
                placeholder="Select your username"
                value={username}
                onChange={event => handleChange(event)}
              />
            </li>
            <li>
              <input
                type="password"
                name="password"
                placeholder="Create your password"
                value={password}
                onChange={event => handleChange(event)}
              />
            </li>
            <li>
              <input
                type="text"
                name="photo"
                placeholder="Add a photo"
                value={photo}
                onChange={event => handleChange(event)}
              />
            </li>
          </ul>

          <h2>Now tell people 3 things about you...</h2>
          <ul>
            <li>
              <input
                type="text"
                name="bio1"
                placeholder="I play..."
                value={bio1}
                onChange={event => handleChange(event)}
              />
            </li>
            <li>
              <input
                type="text"
                name="bio2"
                placeholder="I like..."
                value={bio2}
                onChange={event => handleChange(event)}
              />
            </li>
            <li>
              <input
                type="text"
                name="bio3"
                placeholder="I enjoy..."
                value={bio3}
                onChange={event => handleChange(event)}
              />
            </li>
            <li>
              <S3UploadContainer />
            </li>
          </ul>
          <button className="newrecipient__btn-submit " type="submit">
            Create account
          </button>
        </form>

        <RecipientSignUpForm />
      </React.Fragment>
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
  photo: PropTypes.string,
  bio1: PropTypes.string,
  bio2: PropTypes.string,
  bio3: PropTypes.string
};

NewRecipient.defaultProps = {
  lastName: '',
  tel: '',
  username: '',
  password: '',
  photo: '',
  bio1: '',
  bio2: '',
  bio3: ''
};
export default NewRecipient;
