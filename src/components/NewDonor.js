import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/new-donor.scss';

const NewDonor = ({
  firstname,
  //   lastname,
  //   telephone,
  //   email,
  //   password,
  //   cardNo,
  //   cardExp,
  //   cardCCV,
  setInput,
  //   setLastnameInput,
  //   setTelephone,
  //   setEmail,
  //   setPassword,
  //   setCardNo,
  //   setCardExp,
  //   setCardCCV,
  //   submitForm,
}) => {
  function handleChange(event) {
    setInput(event.target.value);
  }
  return (
    <React.Fragment>
      <form className="signup">
        <ul>
          <h3>Add your basic information</h3>
          <li>
            <input
              type="text"
              name="firstname"
              value={firstname}
              placeholder="First name"
              onChange={() => handleChange}
            />
          </li>
          <li>
            <input type="text" name="lastname" placeholder="Last name" />
          </li>
          <li>
            <input type="text" name="telephone" placeholder="Telephone number" />
          </li>

          <li>
            <input type="email" name="email" placeholder="Email" />
          </li>
          <li>
            <input type="password" name="password" placeholder="Password" />
          </li>
          <h3>Your payment information: </h3>
          <li>
            <input type="text" name="cardNo" placeholder="Card Number" />
          </li>
          <li>
            <input type="text" name="cardExp" placeholder="Expiry Date" />
          </li>
          <li>
            <input type="text" name="cardCCV" placeholder="CCV" />
          </li>
        </ul>
        <button onClick={e => e.preventDefault()} type="submit">
          Create account
        </button>
      </form>
    </React.Fragment>
  );
};

NewDonor.propTypes = {
  firstname: PropTypes.string.isRequired,
  //   lastname: PropTypes.string.isRequired,
  //   telephone: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   password: PropTypes.string.isRequired,
  //   cardNo: PropTypes.string.isRequired,
  //   cardExp: PropTypes.string.isRequired,
  //   cardCCV: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  //   setLastnameInput: PropTypes.func.isRequired,
  //   setTelephone: PropTypes.func.isRequired,
  //   setEmail: PropTypes.func.isRequired,
  //   setPassword: PropTypes.func.isRequired,
  //   setCardNo: PropTypes.func.isRequired,
  //   setCardExp: PropTypes.func.isRequired,
  //   setCardCCV: PropTypes.func.isRequired,
  //   submitForm: PropTypes.func.isRequired,
};

export default NewDonor;
