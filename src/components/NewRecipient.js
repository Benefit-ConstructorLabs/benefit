import React from 'react';
import PropTypes from 'prop-types';
import RecipientSignUpForm from './RecipientSignUpForm';
import NewRecipientContainer from '../containers/NewRecipientContainer';

import '../../styles/components/newrecipient.scss';

const NewRecipient = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  telephone,
  setTelephone,
  userName,
  setUserName,
  password,
  setPassword,
  handleUpload,
  firstFact,
  setFirstFact,
  secondFact,
  setSecondFact,
  thirdFact,
  setThirdFact,
  generateQRCode,
}) => (
  <React.Fragment>
    <h2>New Recipient</h2>
    <h2 className="newrecipient__title">Start taking digital donations in 3 steps</h2>
    <img src="" alt="" className="newrecipient__header-image" />
    <form className="neerecipient__form" onSubmit={event => event.preventDefault()}>
      <h2>Add your basic information</h2>
      <input
        type="text"
        text="firstname"
        placeholder="First name"
        value={firstName}
        onChange={event => setFirstName(event.target.value)}
      />
      <input
        type="text"
        text="lastname"
        placeholder="Last name"
        value={lastName}
        onChange={event => setLastName(event.target.value)}
      />
      <input
        type="text"
        text="telephone"
        placeholder="Telephone number"
        value={telephone}
        onChange={event => setTelephone(event.target.value)}
      />
      <input
        type="text"
        text="username"
        placeholder="Select your username"
        value={userName}
        onChange={event => setUserName(event.target.value)}
      />
      <input
        type="password"
        text="password"
        placeholder="Create your password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <button
        className="newrecipient__btn-upload-image"
        type="submit"
        onClick={event => handleUpload(event)}
      >
        Upload a picture
      </button>
      <h2>Now tell people 3 things about you...</h2>
      <input
        type="text"
        text="text"
        placeholder="1. I play the piano"
        value={firstFact}
        onChange={event => setFirstFact(event.target.value)}
      />
      <input
        type="text"
        text="text"
        placeholder="2. I like white coffee"
        value={secondFact}
        onChange={event => setSecondFact(event.target.value)}
      />
      <input
        type="text"
        text="text"
        placeholder="3. I'm a Rugby fan"
        value={thirdFact}
        onChange={event => setThirdFact(event.target.value)}
      />
      <button
        className="newrecipient__btn-generate-qr-code "
        type="submit"
        onClickUpload={event => generateQRCode(event)}
      >
        Create account
      </button>
    </form>

    <RecipientSignUpForm />
  </React.Fragment>
);

NewRecipient.propTypes = {
  firstName: PropTypes.string.isRequired,
  setFirstName: PropTypes.func.isRequired,
  lastName: PropTypes.string,
  setLastName: PropTypes.func.isRequired,
  telephone: PropTypes.number,
  setTelephone: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  setUserName: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  handleUpload: PropTypes.string,
  firstFact: PropTypes.string,
  setFirstFact: PropTypes.func.isRequired,
  secondFact: PropTypes.string,
  setSecondFact: PropTypes.func.isRequired,
  thirdFact: PropTypes.string,
  setThirdFact: PropTypes.func.isRequired,
  generateQRCode: PropTypes.string.isRequired,
};

NewRecipient.defaultProps = {
  lastName: null,
  telephone: null,
  handleUpload: null,
  firstFact: null,
  secondFact: null,
  thirdFact: null,
};
export default NewRecipient;
