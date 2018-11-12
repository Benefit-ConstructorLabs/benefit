import React from 'react';
// import PropTypes from 'prop-types';

const RecipientBalance = ({ donations }) => {
  return (

    <section className="recipient__account">
      <h2 className="recipient__account__title">Your current balance</h2>
      <p className="recipient__account__balance">£13</p>
      <h3>Latest donations</h3>
      <ul className="recipient__account__donations">
        <li className="recipient__account__donations__donation">
          <img className="donor__photo" src="https://via.placeholder.com/50" alt="donor" />
          <span className="donor__name">Anon.</span>
          <span className="amount">£3.00</span>
        </li>
      </ul>
    </section>
  );
};

// RecipientBalance.propTypes = {
//   firstName: PropTypes.string.isRequired,
//   balance: PropTypes.number.isRequired,
//   donations: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

export default RecipientBalance;
