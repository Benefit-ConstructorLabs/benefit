import React from 'react';
// import PropTypes from 'prop-types';

const RecipientBalance = () => {
  return (

    <section className="recipient-account">
      <h2 className="recipient-account__title">Your current balance</h2>
      <p className="recipient-account__balance">£13</p>
      <h3>Latest donations</h3>
      <ul className="donations">
        <li className="donation">
          <img src="https://via.placeholder.com/50" alt="donor" />
          <span className="recipient-account__donation donor">Anon.</span>
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
