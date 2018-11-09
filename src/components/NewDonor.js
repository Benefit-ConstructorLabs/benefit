import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/new-donor.scss';

const NewDonor = ({
  firstName,
  lastName,
  tel,
  email,
  password,
  cardNo,
  cardExp,
  cardCCV,
  setDonorInputField,
  addDonor,
}) => {
  function handleChange(event) {
    setDonorInputField(event.target.name, event.target.value);
  }
  return (
    <React.Fragment>
      <form
        className="newdonor"
        onSubmit={(event) => {
          event.preventDefault();
          addDonor();
        }}
      >
        <ul>
          <h3>Add your basic information</h3>
          <li>
            <input
              type="text"
              name="firstName"
              value={firstName}
              placeholder="First name"
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
              value={tel}
              placeholder="Telephone number"
              onChange={event => handleChange(event)}
            />
          </li>

          <li>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={event => handleChange(event)}
            />
          </li>
          <li>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={event => handleChange(event)}
            />
          </li>
          <h3>Your payment information: </h3>
          <li>
            <input
              type="text"
              name="cardNo"
              value={cardNo}
              placeholder="Card Number"
              onChange={event => handleChange(event)}
            />
          </li>
          <li>
            <input
              type="text"
              name="cardExp"
              value={cardExp}
              placeholder="Expiry Date"
              onChange={event => handleChange(event)}
            />
          </li>
          <li>
            <input
              type="text"
              name="cardCCV"
              value={cardCCV}
              placeholder="CCV"
              onChange={event => handleChange(event)}
            />
          </li>
        </ul>
        <button type="submit" className="btn newdonor__btn">
          Create account
        </button>
      </form>
    </React.Fragment>
  );
};

NewDonor.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  cardNo: PropTypes.string.isRequired,
  cardExp: PropTypes.string.isRequired,
  cardCCV: PropTypes.string.isRequired,
  setDonorInputField: PropTypes.func.isRequired,
  addDonor: PropTypes.func.isRequired,
};

export default NewDonor;
