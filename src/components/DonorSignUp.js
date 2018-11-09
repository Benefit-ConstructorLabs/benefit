import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/donor-sign-up.scss';

const DonorSignUp = ({ showSignUp }) => (
  <span>
    {showSignUp ? (
      <form className="signup">
        <ul>
          <li>
            <input type="text" name="firstname" placeholder="First name" />
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
          <li>
            <input type="text" name="telephone" placeholder="Telephone number" />
          </li>
        </ul>
      </form>
    ) : (
      ''
    )}
  </span>
);

DonorSignUp.propTypes = {
  showSignUp: PropTypes.bool.isRequired,
};

export default DonorSignUp;
