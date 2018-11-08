import React from 'react';
import PropTypes from 'prop-types';
import RecipientSignUpForm from './RecipientSignUpForm';
// import NewRecipientContainer from '../containers/NewRecipientContainer';

import '../../styles/components/newrecipient.scss';

const NewRecipient = ({
  addRecipient,
  setInputField,
  first_name,
  last_name,
  tel,
  username,
  password,
  photo,
  bio_1,
  bio_2,
  bio_3,
}) => {
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
        onSubmit={(event) => {
          event.preventDefault();
          addRecipient();
        }}
      >
        <h2>Add your basic information</h2>
        <ul>
          <li>
            <input
              type="text"
              name="first_name"
              placeholder="First name"
              value={first_name}
              onChange={event => handleChange(event)}
            />
          </li>
          <li>
            <input
              type="text"
              name="last_name"
              placeholder="Last name"
              value={last_name}
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
              name="bio_1"
              placeholder="I play..."
              value={bio_1}
              onChange={event => handleChange(event)}
            />
          </li>
          <li>
            <input
              type="text"
              name="bio_2"
              placeholder="I like..."
              value={bio_2}
              onChange={event => handleChange(event)}
            />
          </li>
          <li>
            <input
              type="text"
              name="bio_3"
              placeholder="I enjoy..."
              value={bio_3}
              onChange={event => handleChange(event)}
            />
          </li>
        </ul>
        <button className="newrecipient__btn-submit " type="submit">
          Create account
        </button>
      </form>

      <RecipientSignUpForm />
    </React.Fragment>
  );
};

NewRecipient.propTypes = {
  addRecipient: PropTypes.func.isRequired,
  setInputField: PropTypes.func.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string,
  tel: PropTypes.string,
  username: PropTypes.string,
  password: PropTypes.string,
  photo: PropTypes.string,
  bio_1: PropTypes.string,
  bio_2: PropTypes.string,
  bio_3: PropTypes.string,
};

NewRecipient.defaultProps = {
  last_name: '',
  tel: '',
  username: '',
  password: '',
  photo: '',
  bio_1: '',
  bio_2: '',
  bio_3: '',
};
export default NewRecipient;
