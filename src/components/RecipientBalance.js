import React from 'react';
// import PropTypes from 'prop-types';

const RecipientBalance = ({ donations }) => {
  const donationTotal = donations.reduce((acc, donation) => {
    return acc + donation.amount;
  }, 0);

  return (
    <section className="recipient__account">
      <h2 className="recipient__account__title">Your current balance</h2>
      <p className="recipient__account__balance">{`£${donationTotal}`}</p>
      <h3>Latest donations</h3>
      <ul className="recipient__account__donations">
        {donations.map((donation) => {
          const { id, first_name, last_name, amount } = donation;
          return (
            <li className="recipient__account__donations__donation" key={id}>
              <img className="donor__photo" src="https://via.placeholder.com/50" alt="donor" />
              <span className="donor__name">{`${first_name} ${last_name}`}.</span>
              <span className="amount">{`£${amount}`}</span>
            </li>
          );
        }
        )
        }

      </ul>
    </section>
  )
};

export default RecipientBalance;
